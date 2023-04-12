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
 *
 * Load gulp plugins and passing them semantic names.
 */
import gulp from 'gulp';

// CSS related plugins.
import nodesass from 'node-sass';
import gulpsass from 'gulp-sass';

// JS related plugins.
import gulpuglify from 'gulp-uglify-es'; // Minifies JS files.

// Utility related plugins.
import { deleteAsync } from 'del'; // Delete plugin
import yargs from 'yargs';
import lineec from 'gulp-line-ending-corrector'; // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
import concat from 'gulp-concat'; // Concatenates files.
import tap from 'gulp-tap';
import log from 'fancy-log';
import path from 'path';
import fs from 'fs'; // File System

const {
	success,
	designSystemThemeDir,
	assetDir,
	outputCSSDir,
	outputJSDir,
	designSystemCSS,
	designSystemJS,
	adminStyles,
	adminScripts,
}  = wpGulpConfig;

const {task,src, dest, parallel}  = gulp;

const sass = gulpsass(nodesass); // Gulp plugin for Sass compilation.

const uglify = gulpuglify.default;

var argv = yargs(process.argv).argv;


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

/**
 * Task to build all Styles/Scripts
 */
task('build', async function () {
	await deleteAsync(['js/*.js', 'css/*.css']);

	parallel(
		'admin-css',
		'frontend-css',
		'admin-js',
		'frontend-js',
	)();
});


/**
 * Build Admin Styles
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminStyles(min = false) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var title = `'[ ${success} Admin Styles` + (minified ? ' Minified ] ' : ' ] ');

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
