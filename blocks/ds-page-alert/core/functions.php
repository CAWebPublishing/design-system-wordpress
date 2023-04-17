<?php
/**
 * Ds Page Alert Helper Functions
 *
 * @package ds-page-alert
 */

if ( ! function_exists('cagov_design_system_ds_page_alert_get_min_file') ){
	/**
	* Load Minified Version of a file
	*
	* @param  string $f File to load.
	* @param  string $ext Extension of file, default css.
	*
	* @return string
	*/
	function cagov_design_system_ds_page_alert_get_min_file( $f, $ext = 'css' ) {
		// if not debugging and a minified version exists load it.
		if ( ! DsPageAlert_DEBUG && file_exists( DsPageAlert_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
			return DsPageAlert_URI . str_replace( ".$ext", ".min.$ext", $f );
		} else {
			return DsPageAlert_URI . $f;
		}
	}
}
