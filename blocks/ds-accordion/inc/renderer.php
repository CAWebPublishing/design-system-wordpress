<?php
/**
 * Ds Accordion Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_ds_accordion_block_renderer' ) ) {
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
	function cagov_design_system_ds_accordion_block_renderer( $attributes, $content, $block ) {

		$title = isset( $attributes['title'] ) && ! empty( $attributes['title'] ) ? $attributes['title'] : 'Accordion Title';

		$output = sprintf(
			'
			<div>
				<cagov-accordion>
					<details>
						<summary>%1$s</summary>
						<div class="accordion-body">
						%2$s
						</div>
					</details>
				</cagov-accordion>
			</div>
			',
			$title,
			$content
		);

		return $output;
	}
}
