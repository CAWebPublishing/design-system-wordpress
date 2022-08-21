/**
 * External Dependencies
 */
const {task, src, dest}  = require('gulp'); // Gulp of-course.

// CSS related plugins.
const sass = require('gulp-sass')(require('node-sass')); // Gulp plugin for Sass compilation.

// JS related plugins.
const uglify = require('gulp-uglify-es').default; // Minifies JS files.

// Utility related plugins.
const lineec = require('gulp-line-ending-corrector'); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const concat = require('gulp-concat'); // Concatenates files.
var tap = require('gulp-tap');
var log = require('fancy-log');
var path = require('path');
const fs = require('fs'); // File System
const newFile = require('gulp-file'); // File System

/**
 * Internal Dependencies
 */
const {
    DsPageNavigationCSS, 
    DsPageNavigationJS 
} = require('./wpgulp.config.js');


/**
 * Task to build all Ds Page Navigation CSS/JS
 */
task('build', async function(){
	// build unminified files.
	buildDsPageNavigationCSS(false);
	buildDsPageNavigationJS(false);

	// build minified files.
	buildDsPageNavigationCSS();
	buildDsPageNavigationJS();
    

});

/**
 * Build Ds Page Navigation CSS file
 */
async function buildDsPageNavigationCSS(min = true){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'ds-page-navigation' + minified + '.css';

	try {
	
		fs.access('css/' + fileName, fs.F_OK, (err) => {
			if (! err) {
				fs.unlink('css/' + fileName, (err =>{}))
			}
		})

		// Ds Page Navigation Front End CSS
		if (DsPageNavigationCSS.length){
			src(DsPageNavigationCSS)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('css/'))
			.pipe(tap(function (file) {
				log('[ ✅ DsPageNavigationCSS Frontend ' + t + 'CSS ] ' + path.basename(file.path) + ' was created successfully.');
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
 * Build Ds Page Navigation JS file
 */
async function buildDsPageNavigationJS(min = true){
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'ds-page-navigation' + minified + '.js';
	
	try {

		fs.access('js/' + fileName, fs.F_OK, (err) => {
			if (! err) {
				fs.unlink('css/' + fileName, (err =>{}))
			}
		})

		// Ds Page Navigation Front End JS
		if (DsPageNavigationJS.length){
			let js = src(DsPageNavigationJS);

			if (min) {
				js = js.pipe(uglify());
			}

			js.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('js/'))
			.pipe(tap(function (file) {
				log('[ ✅ Ds Page Navigation Frontend ' + t + 'JS ] ' + path.basename(file.path) + ' was created successfully.');
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