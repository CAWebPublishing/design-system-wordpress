/**
 * External Dependencies
 */
const { task, src, dest } = require( 'gulp' ); // Gulp of-course.

// CSS related plugins.
const sass = require( 'gulp-sass' )( require( 'node-sass' ) ); // Gulp plugin for Sass compilation.

// JS related plugins.
const uglify = require( 'gulp-uglify-es' ).default; // Minifies JS files.

// Utility related plugins.
const lineec = require( 'gulp-line-ending-corrector' ); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const concat = require( 'gulp-concat' ); // Concatenates files.
var tap = require( 'gulp-tap' );
var log = require( 'fancy-log' );
var path = require( 'path' );
const fs = require( 'fs' ); // File System
const newFile = require( 'gulp-file' ); // File System

/**
 * Internal Dependencies
 */
const { DroughtMapCSS, DroughtMapJS } = require( './wpgulp.config.js' );

/**
 * Task to build all Drought Map CSS/JS
 */
task( 'build', async function () {
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
	var t = min ? ' Minified ' : '';
	var fileName = 'drought-map' + minified + '.css';

	try {
		fs.access( 'css/' + fileName, fs.F_OK, ( err ) => {
			if ( ! err ) {
				fs.unlink( 'css/' + fileName, ( err ) => {} );
			}
		} );

		// Drought Map Front End CSS
		if ( DroughtMapCSS.length ) {
			src( DroughtMapCSS )
				.pipe(
					sass( {
						outputStyle: buildOutputStyle,
					} )
				)
				.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
				.pipe( concat( fileName ) ) // compiled file
				.pipe( dest( 'css/' ) )
				.pipe(
					tap( function ( file ) {
						log(
							'[ ✅ DroughtMapCSS Frontend ' +
								t +
								'CSS ] ' +
								path.basename( file.path ) +
								' was created successfully.'
						);
					} )
				);
		}

		fs.access( 'css/' + fileName, fs.F_OK, ( err ) => {
			if ( err ) {
				newFile( fileName, '' ).pipe( dest( 'css/' ) );
				return;
			}
		} );
	} catch ( error ) {
		// Note - error messages will vary depending on browser
		console.error( fileName + ' failed to compile' );
	}
}

/**
 * Build Drought Map JS file
 */
async function buildDroughtMapJS( min = true ) {
	var minified = min ? '.min' : '';
	var t = min ? ' Minified ' : '';
	var fileName = 'drought-map' + minified + '.js';

	try {
		fs.access( 'js/' + fileName, fs.F_OK, ( err ) => {
			if ( ! err ) {
				fs.unlink( 'css/' + fileName, ( err ) => {} );
			}
		} );

		// Drought Map Front End JS
		if ( DroughtMapJS.length ) {
			let js = src( DroughtMapJS );

			if ( min ) {
				js = js.pipe( uglify() );
			}

			js.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
				.pipe( concat( fileName ) ) // compiled file
				.pipe( dest( 'js/' ) )
				.pipe(
					tap( function ( file ) {
						log(
							'[ ✅ Drought Map Frontend ' +
								t +
								'JS ] ' +
								path.basename( file.path ) +
								' was created successfully.'
						);
					} )
				);
		}

		fs.access( 'js/' + fileName, fs.F_OK, ( err ) => {
			if ( err ) {
				newFile( fileName, '' ).pipe( dest( 'js/' ) );
				return;
			}
		} );
	} catch ( error ) {
		// Note - error messages will vary depending on browser
		console.error( fileName + ' failed to compile' );
	}
}
