<?php
/**
 * Main Design System Options File
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'toplevel_page_caweb_options', 'cagov_design_system_caweb_options' );

/**
 * Design System Administration Menu Setup
 * Fires when the administration menu loads the CAWeb Options.
 *
 * @link https://developer.wordpress.org/reference/functions/add_menu_page/
 * @return void
 */
function cagov_design_system_caweb_options(){
	// if saving.
	if ( isset( $_POST['caweb_submit'], $_POST['caweb_theme_options_nonce'] ) &&
	wp_verify_nonce( sanitize_key( $_POST['caweb_theme_options_nonce'] ), 'caweb_theme_options' ) ) {
		$mode = isset( $_POST['cagov_design_system_mode'] ) ? $_POST['cagov_design_system_mode'] : 'default';
		
		update_option('cagov_design_system_mode', $mode );
	}
}