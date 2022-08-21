<?php
/**
 * Ds Feature Card Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_ds_feature_card_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_ds_feature_card_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! DsFeatureCard_DEBUG && file_exists( DsFeatureCard_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return DsFeatureCard_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return DsFeatureCard_URI . $f;
		}
	}
}
