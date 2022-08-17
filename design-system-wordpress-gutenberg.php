<?php
/**
 * Plugin Name: ca.gov Design System Gutenberg Blocks
 *
 * @source https://github.com/cagov/design-system/
 * Plugin URI: https://github.com/cagov/design-system-wordpress-gutenberg
 * Description: Integrates the <a href="https://designsystem.webstandards.ca.gov">State of California Design System</a> into the WordPress.
 * Author: Office of Digital Innovation
 * Author URI: https://digital.ca.gov
 * Version: 1.3.3
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: cagov-design-system
 * Requires at least: 5.8
 *
 * @package  cagov-design-system
 * @author   Office of Digital Innovation <info@digital.ca.gov>
 * @license  https://opensource.org/licenses/MIT MIT
 * @link     https://github.com/cagov/design-system-wordpress-gutenberg#README
 * @docs https://designsystem.webstandards.ca.gov
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Plugin constants.
$cagov_doc_root = isset( $_SERVER['DOCUMENT_ROOT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['DOCUMENT_ROOT'] ) ) : '';

define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG', __DIR__ );
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION', '1.2.0.3' );
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG_URI', esc_url( str_replace( $cagov_doc_root, '', __DIR__ ) ) );
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG', false ); // Can associate with env variable later.

/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */

add_action( 'init', 'cagov_ds_gutenberg_init' );
add_action( 'admin_init', 'cagov_ds_gutenberg_admin_init' );
add_action( 'wp_enqueue_scripts', 'cagov_ds_wp_enqueue_scripts' );

/**
 * Design System Admin Init
 *
 * Triggered before any other hook when a user accesses the admin area.
 * Note, this does not just run on user-facing admin screens.
 * It runs on admin-ajax.php and admin-post.php as well.
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @return void
 */
function cagov_ds_gutenberg_admin_init() {
	require_once CAGOV_DESIGN_SYSTEM_GUTENBERG . '/core/class-ca-design-system-gutenberg-update.php';
}

/**
 * Design System Initialization
 *
 * Fires after WordPress has finished loading but before any headers are sent.
 * Include Gutenberg Block assets by getting the index file of each block build file.
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @return void
 */
function cagov_ds_gutenberg_init() {
	global $pagenow;

	/* Include Design System Functionality */
	foreach ( glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/inc/*.php' ) as $file ) {
		require_once $file;
	}

	/**
	 * Enqueues the default ThickBox js and css. (if not on the login page or customizer page)
	 *
	 * @link https://developer.wordpress.org/reference/functions/add_thickbox/
	 */
	if ( ! in_array( $pagenow, array( 'wp-login.php', 'customize.php' ), true ) ) {
		add_thickbox();
	}

	// if editing a page/post register compiled Gutenberg Block bundles.
	if ( in_array( $pagenow, array( 'post.php', 'post-new.php' ), true ) ) {
		// Register shared packages.
		// @TODO check performance after a few components are re-mapped
		// 'jquery', (DEPRECATING: Let's not use jQuery with React.).
		$deps = array(
			'thickbox',
			'wp-blocks',
			'wp-element',
			'wp-editor',
			'wp-i18n',
			'wp-block-editor',
			'wp-rich-text',
			'wp-components',
		);

		wp_enqueue_script( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/js/gutenberg.js', 'js' ), $deps, CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION, true );

		wp_register_style( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/css/gutenberg.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );

		wp_enqueue_style( 'cagov-design-system-gutenberg-style', cagov_ds_gutenberg_get_min_file( '/css/cagov-design-system.css' ), array( 'cagov-design-system-gutenberg' ), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );
	}

	// Register all CA Design System Gutenberg Blocks.
	foreach ( glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*/' ) as $block ) {
		$name = basename( $block );

		$args = array(
			'render_callback' => 'cagov_ds_block_renderer',
		);

		register_block_type( strtolower( CAGOV_DESIGN_SYSTEM_GUTENBERG . "/blocks/$name/build" ), $args );
	}

}

/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_block_renderer( $attributes, $content, $block ) {
	if ( ! isset( $block->name ) || empty( $block->name ) ) {
		return;
	}

	$name = str_replace( array( 'cagov-design-system/', '-' ), array( '', '_' ), $block->name );

	if ( function_exists( sprintf( 'cagov_ds_%1$s_render', $name ) ) ) {
		return call_user_func( sprintf( 'cagov_ds_%1$s_render', $name ), $attributes, $content, $block );
	}

}

/**
 * Register Design System scripts/styles
 *
 * Fires when scripts and styles are enqueued.
 *
 * @category add_action( 'wp_enqueue_scripts', 'cagov_ds_wp_enqueue_scripts' );
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * @return void
 */
function cagov_ds_wp_enqueue_scripts() {
	// Register shared packages.
	// @TODO check performance after a few components are re-mapped
	// 'jquery', (DEPRECATING: Let's not use jQuery with React.).
	$deps = array(
		'wp-blocks',
		'wp-element',
		'wp-editor',
		'wp-i18n',
		'wp-block-editor',
		'wp-rich-text',
		'wp-components',
	);

	// Register compiled Gutenberg Block bundles.
	wp_enqueue_script( 'cagov-design-system-components-script', cagov_ds_gutenberg_get_min_file( '/js/cagov-design-system.js', 'js' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION, true );

	wp_enqueue_style( 'cagov-design-system-gutenberg-style', cagov_ds_gutenberg_get_min_file( '/css/cagov-design-system.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );

}
