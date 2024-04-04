<?php
/**
 * Plugin Name:       Ds Page Alert
 * Plugin URI:        https://github.com/CA-CODE-Works/design-system-wordpress/blocks/ds-page-alert
 * Description:       California Design System Ds Page Alert Component
 * Version:           1.1.0
 * Requires at least: 6.2
 * Requires PHP:      8.1
 * Author:            CAWebPublishing
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ds-page-alert
 *
 * @package           cagov-design-system
 */

if ( ! defined('DsPageAlert_URI') ){
	$cagov_design_system_ds_page_alert_doc_root = isset( $_SERVER['DOCUMENT_ROOT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['DOCUMENT_ROOT'] ) ) : '';
	define( 'DsPageAlert_URI', esc_url( str_replace( $cagov_design_system_ds_page_alert_doc_root, '', __DIR__ ) ) );
}

if ( ! defined( 'CAGOV_DESIGN_SYSTEM_DEBUG' ) ) {
	define( 'CAGOV_DESIGN_SYSTEM_DEBUG', false );
}

// Include Ds Page Alert Core Functionality.
foreach ( glob( __DIR__ . '/core/*.php' ) as $file ) {
	require_once $file;
}

/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */
add_action( 'init', 'cagov_design_system_ds_page_alert_init' );

if ( ! function_exists( 'cagov_design_system_ds_page_alert_init' ) ) {
	/**
	 * Ds Page Alert Initialization
	 *
	 * Fires after WordPress has finished loading but before any headers are sent.
	 * Include Gutenberg Block assets by getting the index file of each block build file.
	 *
	 * @link https://developer.wordpress.org/reference/hooks/init/
	 * @return void
	 */
	function cagov_design_system_ds_page_alert_init() {
		global $pagenow;

		/**
		* Enqueues the default ThickBox js and css. (if not on the login page or customizer page)
		*
		* @link https://developer.wordpress.org/reference/functions/add_thickbox/
		*/
		if ( ! in_array( $pagenow, array( 'wp-login.php', 'customize.php' ), true ) ) {
			add_thickbox();
		}

		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		*/
		register_block_type( __DIR__ . '/build' );
	}
}

