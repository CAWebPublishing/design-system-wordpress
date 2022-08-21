/**
 * Ds Page Alert Gulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package caweb
 */


module.exports = {
	DsPageAlertCSS: [ // Ds Page Alert CSS
		'node_modules/@cagov/*/src/index.scss',
		'assets/css/*'
	], 
	DsPageAlertJS: [ // Ds Page Alert JS
		'node_modules/@cagov/*/dist/index.js',
		'assets/js/*'
	]
};