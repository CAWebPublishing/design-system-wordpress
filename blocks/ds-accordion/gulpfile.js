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
const { DsAccordionCSS, DsAccordionJS } = require( './wpgulp.config.js' );

/**
 * Task to build all Ds Accordion CSS/JS
 */
task( 'build', async function () {
	del( [ 'js/*.js', 'css/*.css' ] );

	// build unminified files.
	buildDsAccordionCSS( false );
	buildDsAccordionJS( false );

	// build minified files.
	buildDsAccordionCSS();
	buildDsAccordionJS();
} );

/**
 * Build Ds Accordion CSS file
 */
async function buildDsAccordionCSS( min = true ) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';

	// Ds Accordion Front End CSS
	if ( DsAccordionCSS.length ) {
		src( DsAccordionCSS )
			.pipe(
				sass( {
					outputStyle: buildOutputStyle,
				} )
			)
			.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe( concat( `ds-accordion${ minified }.css` ) ) // compiled file
			.pipe(
				tap( function ( file ) {
					log(
						'[ ✅ DsAccordionCSS Frontend ' +
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
 * Build Ds Accordion JS file
 */
async function buildDsAccordionJS( min = true ) {
	var minified = min ? '.min' : '';

	// Ds Accordion Front End JS
	if ( DsAccordionJS.length ) {
		let js = src( DsAccordionJS );

		if ( min ) {
			js = js.pipe( uglify() );
		}

		js.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe( concat( `ds-accordion${ minified }.js` ) ) // compiled file
			.pipe(
				tap( function ( file ) {
					log(
						'[ ✅ Ds Accordion Frontend ' +
							( min ? 'Minified JS ] ' : 'JS ] ' ) +
							path.basename( file.path ) +
							' was created successfully.'
					);
				} )
			)
			.pipe( dest( 'js/' ) );
	}
}
