<?php
/**
 * Ds Page Navigation Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_ds_page_navigation_block_renderer' ) ) {
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
	function cagov_design_system_ds_page_navigation_block_renderer( $attributes, $content, $block ) {

		$title = isset( $attributes['title'] ) ? $attributes['title'] : 'On this page';

		$output = sprintf(
			'
		<div>
			<sidebar>
				<cagov-page-navigation>
					<nav aria-labelledby="page-navigation-label">
						<div class="label">%1$s</div>
						<ul>
						%2$s
						</ul>
					</nav>
				</cagov-page-navigation>
			</sidebar>
		</div>
		',
			$title,
			$content
		);

		return $output;
	}
}
