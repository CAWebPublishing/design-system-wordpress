<?php
/**
 * Plugin Name: ca.gov Design System
 * Plugin URI: https://github.com/cagov/design-system-wordpress
 * Description: Integrates the <a href="https://designsystem.webstandards.ca.gov">State of California Design System</a> into WordPress.
 * Author: CAWebPublishing
 * Author URI: https://digital.ca.gov
 * Version: 1.1.5
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: cagov-design-system
 * Requires at least: 6.2
 * Requires PHP: 8.0
 *
 * @package  cagov-design-system
 * @source https://github.com/cagov/design-system/
 * @author   CAWebPublishing
 * @license  https://opensource.org/licenses/MIT MIT
 * @link     https://github.com/cagov/design-system-wordpress#README
 * @docs https://designsystem.webstandards.ca.gov
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CAGOV_DESIGN_SYSTEM_DIR', __DIR__ );
define( 'CAGOV_DESIGN_SYSTEM_URL', plugin_dir_url( __FILE__ ) );
define( 'CAGOV_DESIGN_SYSTEM_DEBUG', false );

// Define blocks by mode.
define( 'CAGOV_DESIGN_SYSTEM_DEFAULT_BLOCKS', array(
	'ds-accordion',
	'ds-feature-card',
	'ds-link-grid',
	'link-grid-card',
	'ds-ds-page-alert',
	'ds-page-navigation'
) );

define( 'CAGOV_DESIGN_SYSTEM_CAMPAIGN_BLOCKS', array(
	'cdt-ds-cards',
) );

add_action( 'plugins_loaded', 'cagov_design_system_plugins_loaded' );

add_action( 'admin_enqueue_scripts', 'cagov_design_system_admin_enqueue_scripts', 16 );
add_action( 'wp_enqueue_scripts', 'cagov_design_system_wp_enqueue_scripts', 9999999999 );

add_action( 'get_header', 'cagov_design_system_get_header' );
add_action( 'get_footer', 'cagov_design_system_get_footer' );


/**
 * Fires once activated plugins have loaded.
 *
 * @return void
 */
function cagov_design_system_plugins_loaded() {
	$mode = get_option('cagov_design_system_mode', 'default');

	/* Include Functionality */
	foreach ( glob( CAGOV_DESIGN_SYSTEM_DIR . '/core/*.php' ) as $file ) {
		require_once $file;
	}

	// Add Gutenberg blocks.
	foreach ( glob( CAGOV_DESIGN_SYSTEM_DIR . '/blocks/*' ) as $file ) {
		$block_slug = basename( $file );
		
		// only add blocks for the corresponding mode
		$allowed_blocks = 'default' === $mode ? CAGOV_DESIGN_SYSTEM_DEFAULT_BLOCKS : CAGOV_DESIGN_SYSTEM_CAMPAIGN_BLOCKS;

		if(  in_array( $block_slug, $allowed_blocks, true ) ){
			require_once sprintf( '%1$s/blocks/%2$s/%2$s.php', CAGOV_DESIGN_SYSTEM_DIR, $block_slug );
		}

	}
}


/**
 * Register scripts/styles with priority of 999999999
 *
 * Fires when scripts and styles are enqueued.
 *
 * @wp_action add_action( 'wp_enqueue_scripts', 'cagov_design_system_wp_enqueue_scripts', 999999999 );
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * @return void
 */
function cagov_design_system_wp_enqueue_scripts() {
	$version   = get_plugin_data( __FILE__ )['Version'];
	$mode = get_option('cagov_design_system_mode', 'default');
	
	wp_dequeue_style( 'cagov-core-style' );
	wp_dequeue_script( 'cagov-core-script' );

	$color = 'default' === $mode ? get_option( 'ca_site_color_scheme', 'cagov' ) : 'campaign';

	// CAgov design system colorscheme.
	$core_color_file = cagov_design_system_get_min_file( "build/$color.css");

	wp_enqueue_style( 'cagov-design-system-colorscheme', $core_color_file, array(), $version );

	if( 'campaign' === $mode ){
		wp_enqueue_style( 'cagov-design-system-campaign', cagov_design_system_get_min_file( "build/style-$color.css"), array(), $version );
	}

	// CAgov design system core.
	$core_file = cagov_design_system_get_min_file( "build/$color.js", 'js' );

	wp_enqueue_script( 'cagov-design-system', $core_file, array('jquery'), $version, true );

}

/**
 * Admin Enqueue Scripts and Styles
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
 * @wp_action add_action( 'admin_enqueue_scripts', 'cagov_design_system_admin_enqueue_scripts', 16 );
 * @param  string $hook The current admin page.
 *
 * @return void
 */
function cagov_design_system_admin_enqueue_scripts( $hook ) {
	$pages = array( 'toplevel_page_caweb_options' );

	if ( in_array( $hook, $pages, true ) ) {
		$version   = get_plugin_data( __FILE__ )['Version'];
		$admin_js                          = cagov_design_system_get_min_file( 'build/admin.js', 'js' );
		
		$cagov_design_system_localize_args = array();

		/* Enqueue Scripts */
		wp_enqueue_script( 'jquery' );

		wp_register_script( 'cagov-design-system-admin-scripts', $admin_js, array( 'jquery' ), $version, true );

		wp_localize_script( 'cagov-design-system-admin-scripts', 'cagov_design_system_admin_args', $cagov_design_system_localize_args );

		wp_enqueue_script( 'cagov-design-system-admin-scripts' );
	}
}

/**
 * Loads header template.
 *
 * @link https://developer.wordpress.org/reference/functions/get_header/
 *
 * @return void
 */
function cagov_design_system_get_header() {
	remove_action( 'wp_body_open', 'caweb_wp_body_open' );

	add_action( 'wp_body_open', 'cagov_design_system_wp_body_open' );

}

/**
 * Loads footer template.
 *
 * @link https://developer.wordpress.org/reference/functions/get_footer/
 *
 * @return void
 */
function cagov_design_system_get_footer() {
	remove_action( 'wp_footer', 'caweb_wp_footer' );

	add_action( 'wp_footer', 'cagov_design_system_wp_footer' );

}

/**
 * Fires the wp_body_open action.
 *
 * @link https://developer.wordpress.org/reference/functions/wp_body_open/
 * @return void
 */
function cagov_design_system_wp_body_open() {
	$mode = get_option('cagov_design_system_mode', 'default');
	
	require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/header.php";
}

/**
 * Fires the wp_footer action.
 *
 * @link https://developer.wordpress.org/reference/functions/wp_footer/
 * @return void
 */
function cagov_design_system_wp_footer() {
	$mode = get_option('cagov_design_system_mode', 'default');

	require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/footer.php";
}
