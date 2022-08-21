<?php
/**
 * Reservoir Levels Helper Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_reservoir_levels_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function caweb_reservoir_levels_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! ReservoirLevels_DEBUG && file_exists( ReservoirLevels_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return ReservoirLevels_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return ReservoirLevels_URI . $f;
		}
	}
}
