/**
 * External Dependencies
 */
const { task, src, dest } = require( 'gulp' ); // Gulp of-course.

// CSS related plugins.
const sass = require( 'gulp-sass' )( require( 'sass' ) ); // Gulp plugin for Sass compilation.

// JS related plugins.
const uglify = require( 'gulp-uglify-es' ).default; // Minifies JS files.

// Utility related plugins.
const del = require( 'del' ); // Delete plugin
const lineec = require( 'gulp-line-ending-corrector' ); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const concat = require( 'gulp-concat' ); // Concatenates files.
var tap = require( 'gulp-tap' );
var log = require( 'fancy-log' );
var path = require( 'path' );
const fs = require( 'fs' ); // File System

/**
 * Internal Dependencies
 */
const { LinkGridCardCSS, LinkGridCardJS } = require( './wpgulp.config.js' );

/**
 * Task to build all Link Grid Card CSS/JS
 */
task( 'build', async function () {
	del( [ 'js/*.js', 'css/*.css' ] );

	// build unminified files.
	buildLinkGridCardCSS( false );
	buildLinkGridCardJS( false );

	// build minified files.
	buildLinkGridCardCSS();
	buildLinkGridCardJS();
} );

/**
 * Build Link Grid Card CSS file
 */
async function buildLinkGridCardCSS( min = true ) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';

	// Link Grid Card Front End CSS
	if ( LinkGridCardCSS.length ) {
		src( LinkGridCardCSS )
			.pipe(
				sass( {
					outputStyle: buildOutputStyle,
				} )
			)
			.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe( concat( `link-grid-card${ minified }.css` ) ) // compiled file
			.pipe(
				tap( function ( file ) {
					log(
						'[ ✅ LinkGridCardCSS Frontend ' +
							( min ? 'Minified CSS ] ' : 'CSS ] ' ) +
							path.basename( file.path ) +
							' was created successfully.'
					);
				} )
			)
			.pipe( dest( 'css/' ) );
	}
}

/**
 * Build Link Grid Card JS file
 */
async function buildLinkGridCardJS( min = true ) {
	var minified = min ? '.min' : '';

	// Link Grid Card Front End JS
	if ( LinkGridCardJS.length ) {
		let js = src( LinkGridCardJS );

		if ( min ) {
			js = js.pipe( uglify() );
		}

		js.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe( concat( `link-grid-card${ minified }.js` ) ) // compiled file
			.pipe(
				tap( function ( file ) {
					log(
						'[ ✅ Link Grid Card Frontend ' +
							( min ? 'Minified JS ] ' : 'JS ] ' ) +
							path.basename( file.path ) +
							' was created successfully.'
					);
				} )
			)
			.pipe( dest( 'js/' ) );
	}
}
