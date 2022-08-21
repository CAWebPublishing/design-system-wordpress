<?php
/**
 * Ds Link Grid Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_ds_link_grid_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_ds_link_grid_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! DsLinkGrid_DEBUG && file_exists( DsLinkGrid_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return DsLinkGrid_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return DsLinkGrid_URI . $f;
		}
	}
}
