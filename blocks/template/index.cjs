/**
 * External dependencies
 */
const { join } = require( 'path' );
const { capitalCase } = require( 'change-case' );

/**
 * Internal dependencies
 */
const blockSlug = process.argv[ 2 ];
const blockSlugTitle = capitalCase( blockSlug );

const customScripts = {
	postbuild: 'gulp build'
};
console.log(process.argv)
const npmDependencies = [ '@wordpress/icons@9.22.0' ];

const npmDevDependencies = [
	'del@6.1.1',
	'fancy-log@2.0.0',
	'gulp@4.0.2',
	'gulp-cli@2.3.0',
	'gulp-concat@2.6.1',
	'gulp-file@0.4.0',
	'gulp-line-ending-corrector@1.0.3',
	'gulp-sass@5.1.0',
	'gulp-tap@2.0.0',
	'gulp-uglify-es@3.0.0',
	'sass@1.62.0',
];

module.exports = {
	pluginTemplatesPath: join( __dirname, 'plugin' ),
	blockTemplatesPath: join( __dirname, 'block' ),
	assetsPath: join( __dirname, 'assets' ),
	defaultValues: {
		pluginURI: `https://github.com/CA-CODE-Works/design-system-wordpress/blocks/${ blockSlug }`,
		plugin: true,
		description: `California Design System ${ blockSlugTitle } Component`,
		version: '1.0.0',
		author: 'CAWebPublishing',
		license: 'GPL-2.0-or-later',
		licenseURI: 'https://www.gnu.org/licenses/gpl-2.0.html',
		namespace: 'cagov_design_system',
		category: 'cagov-design-system',
		textdomain: 'cagov-design-system',
		dashicon: 'format-aside',
		supports: {
			html: true,
		},
		attributes: {},
		customScripts: customScripts,
		npmDependencies: npmDependencies,
		npmDevDependencies: npmDevDependencies,
	},
};
