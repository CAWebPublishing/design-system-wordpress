/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
 const {gutenbergEditorCSS, designSystemCSS, gutenbergEditorJS, designSystemJS } = require('./wpgulp.config.js');

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
	//console.log('info');
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
task('build-blocks', buildGutenbergBlocks );

/**
 * Task to build individual block
 */
task('build-block', async function(){
	if( '%npm_config_name%' == argv.name || undefined == argv.name ){
		return;
	}

	src(['./blocks/' + argv.name + '/'])
        .pipe(tap (function(file){
			try {
				shell.task("cd " + file.path + " && npm run build")()
			} catch (error) {
				// Note - error messages will vary depending on browser
				console.error(file.path + ' failed to compile');
			}	
        }))
});

/**
 * Task to install all block npm packages
 */
task('install-block-packages', installGutenbergBlocks);

/**
 * Runs Gutenberg Block build script 
 */
 async function buildGutenbergBlocks(){
    src(['./blocks/*/'])
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
		del(['build/css/' + fileName]);

		// Gutenberg Block Editor CSS
		if (gutenbergEditorCSS.length){
			src(gutenbergEditorCSS.concat(designSystemCSS))
				.pipe(
					sass({
						outputStyle: buildOutputStyle,
					})
				)
				.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
				.pipe(concat(fileName)) // compiled file
				.pipe(dest('build/css/'))
				.pipe(tap(function (file) {
					log('[ ✅ Gutenberg Block Editor ' + t + 'CSS ] ' + path.basename(file.path) + ' was created successfully.');
				}))
		}
	
		fs.access('build/css/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('build/css/'));
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
		del(['build/js/' + fileName]);

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
	
			js.pipe(dest('build/js/'))
	
		}
	
		fs.access('build/js/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('build/js/'));
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
		del(['build/css/' + fileName]);
	
		// Design System Front End CSS
		if (designSystemCSS.length){
			src(designSystemCSS)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('build/css/'))
			.pipe(tap(function (file) {
				log('[ ✅ Design System Frontend ' + t + 'CSS ] ' + path.basename(file.path) + ' was created successfully.');
			}))
		}
	
		fs.access('build/css/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('build/css/'));
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
		del(['build/js/' + fileName]);

		// Design System Front End JS
		if (designSystemJS.length){
			let js = src(designSystemJS);

			if (min) {
				js = js.pipe(uglify());
			}

			js.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('build/js/'))
			.pipe(tap(function (file) {
				log('[ ✅ Design System Frontend ' + t + 'JS ] ' + path.basename(file.path) + ' was created successfully.');
			}));		
	
		}
	
		fs.access('build/js/' + fileName, fs.F_OK, (err) => {
			if (err) {
				newFile(fileName, '')
			        .pipe(dest('build/js/'));
				return
			}
		  })
	  } catch (error) {
		// Note - error messages will vary depending on browser
		console.error(fileName + ' failed to compile');
	  }
}
