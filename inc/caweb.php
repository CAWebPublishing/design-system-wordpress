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
add_filter( 'caweb_page_container_class', 'cagov_design_system_page_container_class' );
add_filter( 'caweb_main_content_class', 'cagov_design_system_main_content_class' );
add_filter( 'caweb_social_media_links', 'cagov_design_system_social_media_links' );

add_filter( 'body_class', 'cagov_design_system_body_class', 20, 2 );

// this can be removed once CAWeb removes Template Version 5.5.
add_filter( 'caweb_social_media_links_exclusions', 'cagov_design_system_social_media_links_exclusions' );


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

/**
 * Classes for the page-container
 *
 * @param string $class Class for the page-container.
 * @return string
 */
function cagov_design_system_page_container_class( $class ) {
	return 'page-container-ds';
}

/**
 * Classes for the main-content
 *
 * @param string $class Class for the main-content.
 * @return string
 */
function cagov_design_system_main_content_class( $class ) {
	return 'main-content-ds';
}

/**
 * Filter out CAWeb Social Media Links
 *
 * @param  array $social_links Array of CAWeb Social Media Links.
 * @return array
 */
function cagov_design_system_social_media_links( $social_links = array() ) {
	$cagov_social_links = array(
		'Email'           => 'ca_social_email',
		'Facebook'        => 'ca_social_facebook',
		'Flickr'          => 'ca_social_flickr',
		'Github'          => 'ca_social_github',
		'Instagram'       => 'ca_social_instagram',
		'LinkedIn'        => 'ca_social_linkedin',
		'Twitter'         => 'ca_social_twitter',
		'YouTube'         => 'ca_social_youtube',
	);

	return $cagov_social_links;
}

/**
 * Filter out CAWeb Social Media Links that shouldn't be displayed
 *
 * @todo this can be removed once CAWeb removes Template Version 5.5.
 *
 * @param  array $social_links Array of CAWeb Social Media Links to exclude.
 * @return array
 */
function cagov_design_system_social_media_links_exclusions( $social_links = array() ) {
	return array();
}

/**
 *
 * Filters the list of CSS body class names for the current post or page.
 *
 * @link https://developer.wordpress.org/reference/hooks/body_class/
 * @param  array $wp_classes An array of body class names.
 * @param  array $extra_classes An array of additional class names added to the body.
 *
 * @wp_filter add_filter( 'body_class','cagov_design_system_body_class' , 20 , 2 );
 * @return array
 */
function cagov_design_system_body_class( $wp_classes, $extra_classes ) {

	/* List of the classes that need to be removed */
	$blacklist = array(
		'et_secondary_nav_dropdown_animation_fade',
		'et_primary_nav_dropdown_animation_fade',
		'et_fixed_nav',
		'et_show_nav',
		'et_right_sidebar',
		'5.5',
		'6.0'
	);

	/* List of extra classes that need to be added to the body */
	if ( isset( $post->ID ) ) {
		$sidebar_enabled = ! is_page();

		$whitelist = array(
			( caweb_is_divi_used() ? 'divi-built' : '' ),
			( 'on' === get_post_meta( $post->ID, 'ca_custom_post_title_display', true ) ? 'title-displayed' : '' ),
			( ! caweb_is_divi_used() && is_active_sidebar( 'sidebar-1' ) && $sidebar_enabled ? 'sidebar-displayed' : '' ),
		);
	}
	$whitelist[] = 'design-system';

	/* Remove any classes in the blacklist from the wp_classes */
	$wp_classes = array_diff( $wp_classes, $blacklist );

	/* Return filtered wp class */
	return array_merge( $wp_classes, (array) $whitelist );
}
