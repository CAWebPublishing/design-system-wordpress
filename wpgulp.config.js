/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */


export default {
	success: '✅',
	outputCSSDir: './css/',
	outputJSDir: './js/',
	// Asset Directories
	designSystemThemeDir:  'node_modules/@cagov/ds-base-css/dist/themes/',
	assetDir: 'assets', // Assets
	// Theme Styles
	adminStyles:[ // WP Backend Admin Styles
	],
	adminScripts: [ // WP Backend Admin JS
		'assets/js/admin/caweb.js',
	], 
	designSystemCSS: [ // Design System Components CSS
		'node_modules/@cagov/ds-skip-to-content/dist/index.css',
		'node_modules/@cagov/ds-statewide-header/dist/index.css',
		'node_modules/@cagov/ds-site-header/dist/index.css',
		'node_modules/@cagov/ds-site-navigation/dist/index.css',
		'node_modules/@cagov/ds-statewide-footer/dist/index.css',
		'node_modules/@cagov/ds-site-footer/dist/index.css',
		'assets/scss/frontend.scss',
	], 
	designSystemJS: [ // Design Components JS
		// 'node_modules/@cagov/ds-link-icon/src/index.js', waiting for export statement to be removed 1.1.2
		'node_modules/@cagov/ds-site-navigation/dist/index.js',
	],
};