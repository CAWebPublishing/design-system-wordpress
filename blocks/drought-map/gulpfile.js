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
const { DroughtMapCSS, DroughtMapJS } = require( './wpgulp.config.js' );

/**
 * Task to build all Drought Map CSS/JS
 */
task( 'build', async function () {
	del( [ 'js/*.js', 'css/*.css' ] );

	// build unminified files.
	buildDroughtMapCSS( false );
	buildDroughtMapJS( false );

	// build minified files.
	buildDroughtMapCSS();
	buildDroughtMapJS();
} );

/**
 * Build Drought Map CSS file
 */
async function buildDroughtMapCSS( min = true ) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';

	// Drought Map Front End CSS
	if ( DroughtMapCSS.length ) {
		src( DroughtMapCSS )
			.pipe(
				sass( {
					outputStyle: buildOutputStyle,
				} )
			)
			.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe( concat( `drought-map${ minified }.css` ) ) // compiled file
			.pipe(
				tap( function ( file ) {
					log(
						'[ ✅ DroughtMapCSS Frontend ' +
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
 * Build Drought Map JS file
 */
async function buildDroughtMapJS( min = true ) {
	var minified = min ? '.min' : '';

	// Drought Map Front End JS
	if ( DroughtMapJS.length ) {
		let js = src( DroughtMapJS );

		if ( min ) {
			js = js.pipe( uglify() );
		}

		js.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe( concat( `drought-map${ minified }.js` ) ) // compiled file
			.pipe(
				tap( function ( file ) {
					log(
						'[ ✅ Drought Map Frontend ' +
							( min ? 'Minified JS ] ' : 'JS ] ' ) +
							path.basename( file.path ) +
							' was created successfully.'
					);
				} )
			)
			.pipe( dest( 'js/' ) );
	}
}
