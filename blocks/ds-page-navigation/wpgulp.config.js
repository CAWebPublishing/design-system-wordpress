/**
 * Ds Page Navigation Gulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package caweb
 */


module.exports = {
	DsPageNavigationCSS: [ // Ds Page Navigation CSS
		'node_modules/@cagov/*/src/index.scss',
		'assets/css/*'
	], 
	DsPageNavigationJS: [ // Ds Page Navigation JS
		'node_modules/@cagov/*/dist/index.js',
		'assets/js/*'
	]
};