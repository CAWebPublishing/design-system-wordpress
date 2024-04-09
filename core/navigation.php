<?php
/**
 * Design System Navigation Menu
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-includes/class-walker-nav-menu.php
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'wp_nav_menu', 'cagov_design_system_nav_menu', 10, 2 );


/**
 * Filters the HTML content for navigation menus.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_nav_menu/
 * @param  string   $nav_menu The HTML content for the navigation menu.
 * @param  stdClass $args An object containing wp_nav_menu() arguments.
 *
 * @return void
 */
function cagov_design_system_nav_menu( $nav_menu, $args ) {
	/* Menu Construction */
	if ( ! empty( $args->menu ) && isset( $args->theme_location, $args->caweb_nav_type ) ) {
		$mode = get_option('cagov_design_system_mode', 'default');
		$nav = isset( $args->caweb_nav_type ) ? $args->caweb_nav_type : 'singlelevel';

		if ( 'header-menu' === $args->theme_location ) {
			require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/nav-$nav.php";
		} elseif ( 'footer-menu' === $args->theme_location ) {
			require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/nav-footer.php";
		}
	}

}
