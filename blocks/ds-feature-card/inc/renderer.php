<?php
/**
 * Ds Feature Card Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_ds_feature_card_block_renderer' ) ) {
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
	function cagov_design_system_ds_feature_card_block_renderer( $attributes, $content, $block ) {

		$img = '';

		$title = isset( $attributes['title'] ) ? $attributes['title'] : '';

		if ( isset( $attributes['mediaID'] ) && ! empty( $attributes['mediaID'] ) ) {
			$alt = isset( $attributes['mediaAlt'] ) && ! empty( $attributes['mediaAlt'] ) ? sprintf( ' alt="%1$s"', $attributes['mediaAlt'] ) : '';
			$img = sprintf( '<div><img class="cagov-featured-image" src="%1$s"%2$s/></div>', $attributes['mediaURL'], $alt );
		}

		$output = sprintf(
			'
		<div>
			<div class="cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block">
				<div>
					<div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
						<h1>%1$s</h1>
						<div class="cagov-feature-card-body-content">%2$s</div>
					</div>
					<div>%3$s</div>
				</div>
			</div>
		</div>
		',
			$title,
			$content,
			$img
		);

		return $output;
	}
}
