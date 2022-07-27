<?php
/**
 * Design System Helper Functions
 *
 * @package cagov-design-system
 */

/**
 * Load Minified Version of a file
 *
 * @param  string $f File to load.
 * @param  string $ext Extension of file, default css.
 *
 * @return string
 */
function cagov_ds_gutenberg_get_min_file( $f, $ext = 'css' ) {
	// if not debugging and a minified version exists load it.
	if ( ! CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG && file_exists( CAGOV_DESIGN_SYSTEM_GUTENBERG . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . $f;
	}
}
