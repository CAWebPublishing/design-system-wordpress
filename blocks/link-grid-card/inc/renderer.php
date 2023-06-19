<?php
/**
 * Link Grid Card Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_link_grid_card_block_renderer' ) ) {
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
	function cagov_design_system_link_grid_card_block_renderer( $attributes, $content, $block ) {

		$link_text = isset( $attributes['linkText'] ) ? $attributes['linkText'] : 'Link Text';

		$is_link = isset( $attributes['linkInfo'] ) && ! empty( $attributes['linkInfo'] );

		$href   = '#';
		$target = '_self';

		if ( $is_link ) {
			$link_info = $attributes['linkInfo'];
			$href      = isset( $link_info['url'] ) && ! empty( $link_info['url'] ) ? $link_info['url'] : $href;
			$target    = isset( $link_info['linkTarget'] ) && ! empty( $link_info['linkTarget'] ) && $link_info['linkTarget'] ? '_blank' : $target;
		}

		$rel = '_self' === $target ? ' rel="noopener"' : '';

		$output = sprintf(
			'
		<div>
			<a class="no-deco cagov-card" href="%1$s" target="%2$s"%3$s>
				<span class="card-text">%4$s</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					>
					<g>
						<path d="M0,0h24v24H0V0z" fill="none" />
					</g>
					<g>
						<polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
					</g>
				</svg>
			</a>
		</div>
		',
			$href,
			$target,
			$rel,
			$link_text
		);

		return $output;
	}
}
