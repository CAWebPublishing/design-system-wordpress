<?php
/**
 * Design System Filters
 *
 * @package cagov-design-system
 */

global $wp_version;

$cagov_ds_is_under_5_8 = version_compare( $wp_version, '5.8', '<' ) ? '' : '_all';

add_filter( "block_categories$cagov_ds_is_under_5_8", 'cagov_ds_gutenberg_categories', 10, 2 );
add_filter( "allowed_block_types$cagov_ds_is_under_5_8", 'cagov_ds_gutenberg_allowed_block_types' );
add_filter( 'script_loader_tag', 'cagov_ds_gutenberg_script_loader_tag', 10, 3 );


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
				'slug'  => 'cagov-data-viz',
				'title' => 'CA Data Visualization',
			),
		),
		$categories
	);
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

	// Core Components.
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

	// Dynamically get a list of the Design System blocks.
	$design_system = array_map(
		function( $b ) {
			return 'cagov-design-system/' . basename( $b );
		},
		glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*' )
	);

	// Return the desired components.
	return array_merge( $core, $design_system );
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
		$tag = str_replace( "type='text/javascript'", 'type="module"', $tag );
	}

	return $tag;
}
