<?php
/**
 * Plugin Name: ca.gov Design System Gutenberg Blocks
 *
 * @source https://github.com/cagov/design-system/
 * Plugin URI: https://github.com/cagov/design-system-wordpress-gutenberg
 * Description: Integrates the <a href="https://designsystem.webstandards.ca.gov">State of California Design System</a> into the WordPress.
 * Author: Office of Digital Innovation
 * Author URI: https://digital.ca.gov
 * Version: 1.3.0
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
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG', true ); // Can associate with env variable later.

/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */
global $wp_version;

$cagov_ds_is_under_5_8 = version_compare( $wp_version, '5.8', '<' ) ? '' : '_all';

add_action( 'init', 'cagov_ds_gutenberg_enqueue_block_editor_assets' );

add_filter( "block_categories$cagov_ds_is_under_5_8", 'cagov_ds_gutenberg_categories', 10, 2 );
add_filter( "allowed_block_types$cagov_ds_is_under_5_8", 'cagov_ds_gutenberg_allowed_block_types' );

add_filter( 'script_loader_tag', 'cagov_ds_gutenberg_script_loader_tag', 10, 3 );



/**
 * Include Gutenberg Block assets by getting the index file of each block build file.
 *
 * @return void
 */
function cagov_ds_gutenberg_enqueue_block_editor_assets() {

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
	wp_register_script( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/build/js/gutenberg.js', 'js' ), $deps, CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION, true );
	wp_register_script( 'cagov-design-system-components-script', cagov_ds_gutenberg_get_min_file( '/build/js/cagov-design-system.js' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION, true );

	wp_register_style( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/build/css/gutenberg.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );
	wp_register_style( 'cagov-design-system-gutenberg-style', cagov_ds_gutenberg_get_min_file( '/build/css/cagov-design-system.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );

	// Register all CA Design System Gutenberg Blocks.
	foreach ( glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*/' ) as $block ) {
		$name = basename( $block );
		register_block_type( strtolower( CAGOV_DESIGN_SYSTEM_GUTENBERG . "/blocks/$name/build" ) );
	}

}

/**
 * Register Gutenberg Blocks categories to the Block editor
 *
 * @link https://developer.wordpress.org/reference/hooks/block_categories_all/
 *
 * @param  array                   $categories Array of categories for block types.
 * @param  WP_Block_Editor_Context $post The current block editor context.
 * @return array
 */
function cagov_ds_gutenberg_categories( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug'  => 'cagov-design-system',
				'title' => 'CA Design System',
			),
		),
		array(
			array(
				'slug'  => 'cagov-design-system-utilities',
				'title' => 'CAGov Design System: Utilities',
			),
		),
		$categories
	);
}

/**
 * Load Minified Version of a file
 *
 * @param  string $f File to load.
 * @param  string $ext Extension of file, default css.
 *
 * @return string
 */
function cagov_ds_gutenberg_get_min_file( $f, $ext = 'css' ) {
	// if not debugging and a minified version exists load it.
	if ( CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG && file_exists( CAGOV_DESIGN_SYSTEM_GUTENBERG . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . $f;
	}
}

/**
 * Design System Allowed Block Types
 *
 * Removes all blocks or patterns from Gutenberg and returns Design System Blocks.
 *
 * @link https://developer.wordpress.org/reference/hooks/allowed_block_types_all/
 *
 * @param  bool|array $allowed_blocks Array of block type slugs, or boolean to enable/disable all. Default true (all registered block types supported).
 * @return array
 */
function cagov_ds_gutenberg_allowed_block_types( $allowed_blocks ) {

	// if not debugging, return all blocks.
	if ( ! CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG ) {
		return $allowed_blocks;
	}

	remove_theme_support( 'core-block-patterns' );

	// Core Components
	$core = array(
		'core/image',
		'core/paragraph',
		'core/button',
		'core/table',
		'core/heading',
		'core/list',
		'core/custom-html',
		'core/classic',
	);

	// Dynamically get a list of the Design System blocks
	$design_system = array_map( function($b){
		return 'cagov-design-system/' . basename($b);
	},
	glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*')
	);

	// Return the desired components.
	return array_merge($core, $design_system );
}

/**
 * Filters the HTML script tag of an enqueued script.
 *
 * @param  mixed $tag The <script> tag for the enqueued script.
 * @param  mixed $handle The script's registered handle.
 * @param  mixed $src The script's source URL.
 * @return string
 */
function cagov_ds_gutenberg_script_loader_tag( $tag, $handle, $src ) {
	// Register script as module.
	if ( 'cagov-design-system-components-script' === $handle ) {
		$tag = str_replace( 'src', 'type="module" src', $tag );
	}

	return $tag;
}
