<?php
/**
 * Page Navigation Links Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_page_navigation_links_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_page_navigation_links_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! PageNavigationLinks_DEBUG && file_exists( PageNavigationLinks_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return PageNavigationLinks_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return PageNavigationLinks_URI . $f;
		}
	}
}
