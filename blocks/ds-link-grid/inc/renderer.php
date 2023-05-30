<?php
/**
 * Ds Link Grid Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_ds_link_grid_block_renderer' ) ) {
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
	function cagov_design_system_ds_link_grid_block_renderer( $attributes, $content, $block ) {

		$output = sprintf(
			'
		<div>
			<div class="cagov-grid">
			%1$s
			</div>
		</div>
		',
			$content
		);

		return $output;
	}
}
