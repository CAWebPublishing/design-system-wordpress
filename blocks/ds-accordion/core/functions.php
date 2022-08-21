<?php
/**
 * Ds Accordion Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_ds_accordion_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_ds_accordion_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! DsAccordion_DEBUG && file_exists( DsAccordion_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return DsAccordion_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return DsAccordion_URI . $f;
		}
	}
}
