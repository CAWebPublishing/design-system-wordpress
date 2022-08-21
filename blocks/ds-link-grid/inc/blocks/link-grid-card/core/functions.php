<?php
/**
 * Link Grid Card Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_link_grid_card_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_link_grid_card_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! LinkGridCard_DEBUG && file_exists( LinkGridCard_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return LinkGridCard_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return LinkGridCard_URI . $f;
		}
	}
}
