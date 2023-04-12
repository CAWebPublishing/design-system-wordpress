<?php
/**
 * CAWeb Theme Overrides
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// CAWeb theme option overrides.
add_action( 'option_ca_default_navigation_menu', 'cagov_design_system_ca_default_navigation_menu' );
add_action( 'option_ca_site_color_scheme', 'cagov_design_system_ca_site_color_scheme' );

// CAWeb theme filters.
add_filter( 'caweb_nav_menu_types', 'cagov_design_system_nav_menu_types' );
add_filter( 'caweb_tiny_mce_settings', 'cagov_design_system_tiny_mce_settings' );
add_filter( 'caweb_template_colors', 'cagov_design_system_template_colors' );


/**
 * Ensures the CAWeb Theme navigation menu is supported by the Design System.
 *
 * @link https://developer.wordpress.org/reference/hooks/option_option/
 * @param  mixed $val Value of the option. If stored serialized, it will be unserialized prior to being returned.
 * @return mixed
 */
function cagov_design_system_ca_default_navigation_menu( $val ) {
	return array_key_exists( $val, cagov_design_system_nav_menu_types() ) ? $val : 'dropdown';
}

/**
 * Ensures the CAWeb Theme colorscheme is supported by the Design System.
 *
 * @link https://developer.wordpress.org/reference/hooks/option_option/
 * @param  mixed $val Value of the option. If stored serialized, it will be unserialized prior to being returned.
 * @return mixed
 */
function cagov_design_system_ca_site_color_scheme( $val ) {
	foreach ( cagov_design_system_template_colors() as $color => $data ) {
		if ( str_replace( ' ', '', $color ) === $val ) {
			return $val;
		}
	}
	return 'cagov';
}


