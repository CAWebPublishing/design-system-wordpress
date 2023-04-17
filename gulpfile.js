/**
 * Gulpfile.
 *
 * Gulp for CA.gov Design System WordPress.
 * 
 * This Gulpfile is a modified version of WPGulp.
 * @tutorial https://github.com/ahmadawais/WPGulp
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
import wpGulpConfig from './wpgulp.config.js';

/**
 * Load Plugins.
 */
import gulp from 'gulp';
import cp from 'child_process';

// CSS related plugins.
import nodesass from 'node-sass';
import gulpsass from 'gulp-sass';

// JS related plugins.
import gulpuglify from 'gulp-uglify-es'; // Minifies JS files.

// Utility related plugins.
import { deleteAsync, deleteSync } from 'del'; // Delete plugin
import yargs from 'yargs';
import lineec from 'gulp-line-ending-corrector'; // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
import concat from 'gulp-concat'; // Concatenates files.
import tap from 'gulp-tap';
import log from 'fancy-log';
import path from 'path';
import fs from 'fs'; // File System
import util from 'util';
import realineSync from 'readline-sync';

const execPromise = util.promisify( cp.exec );

const {
	success,
	designSystemThemeDir,
	outputCSSDir,
	outputJSDir,
	designSystemCSS,
	designSystemJS,
	adminStyles,
	adminScripts,
}  = wpGulpConfig;

const {task,src, dest, parallel, series}  = gulp;

const sass = gulpsass(nodesass); // Gulp plugin for Sass compilation.

const uglify = gulpuglify.default;

var argv = yargs(process.argv).argv;



/**
 * Build Admin Styles
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminStyles(min = false) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var title = `[ ${success} Admin Styles` + (minified ? ' Minified ] ' : ' ] ');

	if (adminStyles.length){
		src(adminStyles)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat(`admin${minified}.css`)) // compiled file
		.pipe(tap(function (file) {
			log(title + path.basename(file.path) + ' was created successfully.');
		}))
		.pipe(dest(outputCSSDir));
	}

}

/**
 * Build FrontEnd Styles
 * 
 * @param {*} min Whether to build file minified or not
 * @param {*} ver Template version to build
 */
async function buildFrontEndStyles(min = false) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';

	var colors = fs.readdirSync(designSystemThemeDir).filter(file => path.extname(file) === '.css');
	
	colors.forEach(function (theme) {
		var files = [`${designSystemThemeDir}${theme}`].concat(designSystemCSS);

		var color = path.parse(theme).name;
		color = color.charAt(0).toUpperCase() + color.substring(1).toLowerCase();
		var title = `[ ${success} CA.gov Design System ${color} Colorscheme` + (minified ? ' Minified ] ' : ' ] ');


		if (files.length){
			// if file is a scss change extension to css
			// if file has _ remove it
			// if minified add the .min
			theme = theme.replace('.scss', '.css').replace('_', '');
			theme= minified ? theme.replace('.css', '.min.css') : theme;
			
			src(files)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(`cagov-design-system-${theme}`)) // compiled file
			.pipe(dest(outputCSSDir))
			.pipe(tap(function (file) {
				log(title + path.basename(file.path) + ' was created successfully.');
			}));
		}

	});
}

/**
 * Build Admin Scripts
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminJS(min = false) {
	var minified = min ? '.min' : '';
	var title = `[ ${success} CA.gov Design System Admin JavaScript` + (minified ? ' Minified ] ' : ' ] ');

	if (adminScripts.length){
		let js = src(adminScripts)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat(`admin${minified}.js`)) // compiled file
		.pipe(tap(function (file) {
			log(title + path.basename(file.path) + ' was created successfully.');
		}))


		if (min) {
			js = js.pipe(uglify());
		}

		return js.pipe(dest(outputJSDir));
		
	}

}

/**
 * Build Frontend Scripts
 * 
 * @param {*} min Whether to build file minified or not
 * @param {*} ver Template version to build
 */
async function buildFrontendScripts(min = false) {
	var minified = min ? '.min' : '';

	var title = `[ ${success} CA.gov Design System JavaScript`;

	let js = src(designSystemJS)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat(`cagov-design-system${minified}.js`)) // compiled file
		.pipe(tap(function (file) {
			log(title + path.basename(file.path) + ' was created successfully.');
		}));

	if (min) {
		js = js.pipe(uglify());
	}

	js.pipe(dest(outputJSDir));
}

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


/**
 * Task to build Admin Styles
 */
task('admin-css', async function(){
	await deleteAsync(['css/cagov-design-system-admin.css']);
	
	buildAdminStyles(true);
	buildAdminStyles(false);
});

/**
 * Task to buildFrontEnd Styles
 */
task('frontend-css', async function () {
	await deleteAsync(['css/cagov-design-system.css']);
	
	buildFrontEndStyles(false);
	buildFrontEndStyles(true);
});

/**
 * Task to build Admin Scripts
 */
task('admin-js', async function () {
	await deleteAsync(['js/cagov-design-system-admin.js']);
	
	buildAdminJS(true);
	buildAdminJS(false);

});

/**
 *	Task to build Frontend Scripts
 */
task('frontend-js', async function () {
	await deleteAsync(['js/cagov-design-system.js']);
	
	buildFrontendScripts(true);
	buildFrontendScripts(false);
});

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

/**
 * Task to build all Styles/Scripts
 */
task('build', async function () {
	
	await deleteAsync(['js/*.js', 'css/*.css']);
	
	await parallel(
		'admin-css',
		'frontend-css',
		'admin-js',
		'frontend-js',
	)()

});

task('clean', async function(){
	await deleteSync(['blocks/*/node_modules/', 'blocks/*/vendor/'])
})