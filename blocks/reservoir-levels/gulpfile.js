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
    ReservoirLevelsCSS, 
    ReservoirLevelsJS 
} = require('./wpgulp.config.js');


/**
 * Task to build all Reservoir Levels CSS/JS
 */
task('build', async function(){
	// build unminified files.
	buildReservoirLevelsCSS(false);
	buildReservoirLevelsJS(false);

	// build minified files.
	buildReservoirLevelsCSS();
	buildReservoirLevelsJS();
    

});

/**
 * Build Reservoir Levels CSS file
 */
async function buildReservoirLevelsCSS(min = true){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'reservoir-levels' + minified + '.css';

	try {
	
		fs.access('css/' + fileName, fs.F_OK, (err) => {
			if (! err) {
				fs.unlink('css/' + fileName, (err =>{}))
			}
		})

		// Reservoir Levels Front End CSS
		if (ReservoirLevelsCSS.length){
			src(ReservoirLevelsCSS)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('css/'))
			.pipe(tap(function (file) {
				log('[ ✅ ReservoirLevelsCSS Frontend ' + t + 'CSS ] ' + path.basename(file.path) + ' was created successfully.');
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
 * Build Reservoir Levels JS file
 */
async function buildReservoirLevelsJS(min = true){
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'reservoir-levels' + minified + '.js';
	
	try {

		fs.access('js/' + fileName, fs.F_OK, (err) => {
			if (! err) {
				fs.unlink('css/' + fileName, (err =>{}))
			}
		})

		// Reservoir Levels Front End JS
		if (ReservoirLevelsJS.length){
			let js = src(ReservoirLevelsJS);

			if (min) {
				js = js.pipe(uglify());
			}

			js.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest('js/'))
			.pipe(tap(function (file) {
				log('[ ✅ Reservoir Levels Frontend ' + t + 'JS ] ' + path.basename(file.path) + ' was created successfully.');
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