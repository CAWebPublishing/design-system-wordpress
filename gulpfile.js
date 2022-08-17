/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
 const {gutenbergEditorCSS, gutenbergStyleCSS, designSystemCSS, gutenbergEditorJS, designSystemJS } = require('./wpgulp.config.js');

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
 const {task, src, dest, parallel}  = require('gulp'); // Gulp of-course.
 const shell = require('gulp-shell')

// CSS related plugins.
const sass = require('gulp-sass')(require('node-sass')); // Gulp plugin for Sass compilation.

// JS related plugins.
const uglify = require('gulp-uglify-es').default; // Minifies JS files.

// Utility related plugins.
const del = require('del'); // Delete plugin
const lineec = require('gulp-line-ending-corrector'); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const concat = require('gulp-concat'); // Concatenates files.
var tap = require('gulp-tap');
var log = require('fancy-log');
var path = require('path');
const fs = require('fs'); // File System
const newFile = require('gulp-file'); // File System
var argv = require('yargs').argv;

/**
 * Task to run tests with
 */
 task('test', async function(){
	if( undefined != argv.block ){
		console.log(argv.block);
		
	}
})

/**
 * Task to build all CAGov Design System CSS/JS
 */
task('build', async function(){
	// build unminified files.
	buildGutenberEditorCSS(false);
	buildGutenberEditorJS(false);
	buildDesignSystemCSS(false);
	buildDesignSystemJS(false);

	// build minified files.
	buildGutenberEditorCSS();
	//buildGutenberEditorJS();
	buildDesignSystemCSS();
	buildDesignSystemJS();

});


/**
 * Task to build all CAGov Design System Component Blocks
 */
task('build-blocks', async function(){
	var block = '%npm_config_name%' == argv.block || undefined == argv.block || "" == argv.block ? '*' : argv.block;
	
	buildGutenbergBlocks(block);
} );

/**
 * Task to install all block npm packages
 */
task('install-block-packages', installGutenbergBlocks);


/**
 * Task to run tests with
 */
 task('update-block-packages', async function(){
	updateBlockPackages();
})

/**
 * Runs Gutenberg Block build script 
 */
 async function buildGutenbergBlocks(block = '*'){
    src(['./blocks/' + block + '/'])
        .pipe(tap (function(file){
			try {
				shell.task("cd " + file.path + " && npm run build")()
			} catch (error) {
				// Note - error messages will vary depending on browser
				console.error(file.path + ' failed to compile');
			}
        }))

}

/**
 * Installs Gutenberg Block npm packages 
 */
 async function installGutenbergBlocks(){
    src(['./blocks/*/'])
        .pipe(tap (function(file){
			try {
				shell.task("cd " + file.path + " && npm i")()
			} catch (error) {
				// Note - error messages will vary depending on browser
				console.error(file.path + ' failed to compile');
			}
        }))

}
/**
 * Build Gutenberg Block Editor CSS file
 */
async function buildGutenberEditorCSS(min = true){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'gutenberg' + minified + '.css';

	try {
		del(['css/' + fileName]);

		// Gutenberg Block Editor CSS
		if (gutenbergEditorCSS.length){
			src(gutenbergEditorCSS)
				.pipe(
					sass({
						outputStyle: buildOutputStyle,
					})
				)
				.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
				.pipe(concat(fileName)) // compiled file
				.pipe(dest('css/'))
				.pipe(tap(function (file) {
					log('[ ✅ Gutenberg Block Editor ' + t + 'CSS ] ' + path.basename(file.path) + ' was created successfully.');
				}))
		}
	
		fs.access('css/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('css/'));
				return
			}
		  });
			
	} catch (error) {
		// Note - error messages will vary depending on browser
		console.error(fileName + ' failed to compile');
	}


}

/**
 * Build Gutenberg Block Editor JS file
 */
async function buildGutenberEditorJS(min = true){
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'gutenberg' + minified + '.js';
	
	try {
		del(['js/' + fileName]);

		// Gutenberg Block Editor JS
		if (gutenbergEditorJS.length){
			let js = src(gutenbergEditorJS)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(tap(function (file) {
				log('[ ✅ Gutenberg Block Editor ' + t + 'JS ] ' + path.basename(file.path) + ' was created successfully.');
			}));
	
			if (min) {
				js = js.pipe(uglify());
			}
	
			js.pipe(dest('js/'))
	
		}
	
		fs.access('js/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('js/'));
				return
			}
		  });
			
	} catch (error) {
		// Note - error messages will vary depending on browser
		console.error(fileName + ' failed to compile');
	}

}

/**
 * Build Design System CSS file
 */
async function buildDesignSystemCSS(min = true){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'cagov-design-system' + minified + '.css';

	try {
		del(['css/' + fileName]);
	
		// Design System Front End CSS
		if (designSystemCSS.length){
			src(designSystemCSS.concat(gutenbergStyleCSS))
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('css/'))
			.pipe(tap(function (file) {
				log('[ ✅ Design System Frontend ' + t + 'CSS ] ' + path.basename(file.path) + ' was created successfully.');
			}))
		}
	
		fs.access('css/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('css/'));
				return
			}
		  })
			
	} catch (error) {
		// Note - error messages will vary depending on browser
		console.error(fileName + ' failed to compile');
	}


}

/**
 * Build Design System JS file
 */
async function buildDesignSystemJS(min = true){
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'cagov-design-system' + minified + '.js';
	
	try {
		del(['js/' + fileName]);

		// Design System Front End JS
		if (designSystemJS.length){
			let js = src(designSystemJS);

			if (min) {
				js = js.pipe(uglify());
			}

			js.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('js/'))
			.pipe(tap(function (file) {
				log('[ ✅ Design System Frontend ' + t + 'JS ] ' + path.basename(file.path) + ' was created successfully.');
			}));		
	
		}
	
		fs.access('js/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('js/'));
				return
			}
		  })
	  } catch (error) {
		// Note - error messages will vary depending on browser
		console.error(fileName + ' failed to compile');
	  }
}

async function updateBlockPackages(){
	src(['./blocks/*/'])
	.pipe(tap (function(file){
		try {
			shell.task("cd " + file.path + " && ncu -u && npm i")()
		} catch (error) {
			// Note - error messages will vary depending on browser
			console.error(file.path + ' failed to compile');
		}
	}))

}