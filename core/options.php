<?php
/**
 * Main Design System Options File
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'pre_update_option_ca_fav_ico', 'cagov_design_system_update_options', 10, 3 );

/**
 * Design System Administration Menu Setup
 * 
 * @link https://developer.wordpress.org/reference/hooks/pre_update_site_option_option/
 *
 * @param  mixed $value New value of the network option.
 * @param  mixed $old_value Old value of the network option.
 * @param  mixed $option Option name.
 * 
 * @return void
 */
function cagov_design_system_update_options( $value, $old_value, $option ){
	// if saving.
	if ( isset( $_POST['caweb_submit'], $_POST['caweb_theme_options_nonce'] ) &&
	wp_verify_nonce( sanitize_key( $_POST['caweb_theme_options_nonce'] ), 'caweb_theme_options' ) ) {
		$mode = isset( $_POST['cagov_design_system_mode'] ) ? $_POST['cagov_design_system_mode'] : 'default';
		
		update_option('cagov_design_system_mode', $mode );
	}

	return $value;

}