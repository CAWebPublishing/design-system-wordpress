/**
 * Gulpfile.
 *
 * Gulp for CA.gov Design System WordPress.
 */

/**
 * Load Plugins.
 */
import gulp from 'gulp';
import cp from 'child_process';

// Utility related plugins.
import {deleteAsync, deleteSync} from 'del'; // Delete plugin
import yargs from 'yargs';
import util from 'util';
import fs from 'fs'; // File System
import realineSync from 'readline-sync';

const execPromise = util.promisify( cp.exec );

const {task, series}  = gulp;

var argv = yargs(process.argv).argv;

/**
 * Update Block
 * 
 * @param {*} block Whether to build file minified or not
 */
async function updateBlock(block){
	// make tmp directory
	fs.mkdirSync( `blocks/tmp/${block}`, {recursive: true}, (err) => {
		if (err) {
			return console.error(err);
		}
	} );

	// move files to tmp directory
	fs.renameSync(`blocks/${block}/inc/`, `blocks/tmp/${block}/inc/`, function(err){			
		if (err) throw err
		console.log(`Successfully moved blocks/${block}/inc to blocks/tmp/${block}/inc`)

	});
	fs.renameSync(`blocks/${block}/src/`, `blocks/tmp/${block}/src/`, function(err){			
		if (err) throw err
		console.log(`Successfully moved blocks/${block}/src to blocks/tmp/${block}/src`)

	});

	// Run the @wordpress/create-block --template command
	console.log(`Updating ${block}, this may take a few minutes...`);
	await execPromise(`cd blocks/ && npx @wordpress/create-block ${block} --template=./template/index.cjs `)
	.then( ( { stdout } ) => {
		console.log(stdout)
	} )
	.catch( ( error ) => {
		console.log( `error: ${ error.message }` );
	} );

	// delete the blocks inc/ & src/ directory
	await deleteAsync( [`blocks/${block}/inc/`, `blocks/${block}/src/`] );

	// move files back from tmp directory
	fs.renameSync(`blocks/tmp/${block}/inc/`, `blocks/${block}/inc/`,  function(err){			
		if (err) throw err
		console.log(`Successfully moved blocks/tmp/${block}/inc/ back to blocks/${block}/inc/`)

	});
	fs.renameSync(`blocks/tmp/${block}/src/`, `blocks/${block}/src/`,  function(err){			
		if (err) throw err
		console.log(`Successfully moved blocks/tmp/${block}/src/ back to blocks/${block}/src/`)

	});

	// delete tmp directory
	await deleteAsync( [`blocks/tmp/`] );

}

/**
 * Update Block DS Package
 */
async function updateComponentPackage(block, blockPkg = {} ){
	// get latest component version if package exists.
	let latestPkgVersion = await execPromise(`npm view @cagov/${block} version`)
	.then( ( { stdout } ) => {
		return stdout.trim();
	} )
	.catch( ( error ) => {
		return false;
	} );

	// if component package was found
	if( latestPkgVersion ){
		// get current cagov/block package
		let currentPkgVersion = undefined !== blockPkg.dependencies && Object.keys(blockPkg.dependencies).includes(`@cagov/${block}`) ? 
			blockPkg.dependencies[`@cagov/${block}`].replace(/[^]/, '') : false;

		// if force flag is passed force update to latest version
		if( 'true' === argv.force || true === argv.force ){
			currentPkgVersion = latestPkgVersion;

		// interactive mode
		}else{
			// if block has a @cagov/<block> dependency
			if(currentPkgVersion){
				// if latest version is not the same as current version
				if( latestPkgVersion !== currentPkgVersion ){
					let shouldWeUpdate = realineSync.keyInYN(`The npm package @cagov/${block}@${currentPkgVersion} is currently installed.\nThe latest npm package is @cagov/${block}:${latestPkgVersion}\nWould you like to update to the latest version?`);

					currentPkgVersion = shouldWeUpdate ? latestPkgVersion : currentPkgVersion;
				}
			}else{
				// no package was installed but package was detected.
				let shouldWeInstall = realineSync.keyInYN(`The npm package @cagov/${block}@${latestPkgVersion} was found but not installed.\nWould you like to install it now?`);

				currentPkgVersion = shouldWeInstall ? latestPkgVersion : false;
			}
		}

		// install package 
		if( currentPkgVersion ){
			console.log(`Installing @cagov/${block}@${currentPkgVersion}...`)
			await execPromise(`cd blocks/${block}/ && npm i @cagov/${block}@${currentPkgVersion}`)
				.then( ( { stdout } ) => {
					console.log(stdout)
				} )
				.catch( ( error ) => {
					console.log( `error: ${ error.message }` );
				} );
		}
	}

}

task('create-block', async function(){
	if( 'true' === argv.block ){
		return;
	}

	if( fs.existsSync(`blocks/${argv.block}`)){
		let shouldWeUpdate = realineSync.keyInYN(`blocks/${argv.block} already exists.\nWould you like to update the existing block?`);
		
		if( shouldWeUpdate ){
			series(['update-block'])();
		}
	}else{
		
		await execPromise(`cd blocks/ && npx @wordpress/create-block ${argv.block} --template=./template/index.cjs `)
			.then( ( { stdout } ) => {
				console.log(stdout)
			} )
			.catch( ( error ) => {
				console.log( `error: ${ error.message }` );
			} );

		// check for @cagov/block dependency
		await updateComponentPackage(argv.block)

		// build updated block
		await execPromise(`cd blocks/${argv.block}/ && npm run build`)
			.then( ( { stdout } ) => {
				console.log(stdout)
			} )
			.catch( ( error ) => {
				console.log( `error: ${ error.message }` );
			} );
			
	}
});

task('update-block', async function(){

	var blockSlug = argv.block;

	if( fs.existsSync(`blocks/${blockSlug}`)){
		// get current block package.json information
		let blockPkg = JSON.parse(fs.readFileSync(`./blocks/${blockSlug}/package.json`, 'utf8') );

		await updateBlock(blockSlug);

		// check for @cagov/block dependency
		await updateComponentPackage(blockSlug, blockPkg);

		// build updated block
		await execPromise(`cd blocks/${blockSlug}/ && npm run build`)
			.then( ( { stdout } ) => {
				console.log(stdout)
			} )
			.catch( ( error ) => {
				console.log( `error: ${ error.message }` );
			} );
	}
});

task('clean', async function(){
	await deleteSync(['blocks/*/node_modules/', 'blocks/*/vendor/'])
})