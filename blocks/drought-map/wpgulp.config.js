/**
 * Drought Map Gulp Configuration File
 *
 * @package drought-map
 */

module.exports = {
	DroughtMapCSS: [
		// Drought Map CSS
		'node_modules/@cagov/*/dist/index.css',
		'assets/css/*',
	],
	DroughtMapJS: [
		// Drought Map JS
		'node_modules/@cagov/*/dist/index.js',
		'assets/js/*',
	],
};
