<?php
/**
 * Ds  Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_ds_page_alert_block_renderer' ) ) {
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
	function cagov_design_system_ds_page_alert_block_renderer( $attributes, $content, $block ) {

		$message = isset( $attributes['message'] ) ? $attributes['message'] : '';
		$icon    = isset( $attributes['icon'] ) ? $attributes['icon'] : '';

		$output = sprintf(
			'<div>
				<cagov-page-alert
					data-icon="ca-gov-icon-%1$s"
					data-message="%2$s"
					></cagov-page-alert>
			</div>',
			$icon,
			$message
		);

		return $output;
	}
}
