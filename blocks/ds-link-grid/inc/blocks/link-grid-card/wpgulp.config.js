/**
 * Link Grid Card Gulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package caweb
 */


module.exports = {
	LinkGridCardCSS: [ // Link Grid Card CSS
		'node_modules/@cagov/*/src/index.scss',
		'assets/css/*'
	], 
	LinkGridCardJS: [ // Link Grid Card JS
		'node_modules/@cagov/*/dist/index.js',
		'assets/js/*'
	]
};