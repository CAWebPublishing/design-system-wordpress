<?php
/**
 * Page Navigation Links Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists( 'cagov_design_system_page_navigation_links_block_renderer' ) ) {
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
	function cagov_design_system_page_navigation_links_block_renderer( $attributes, $content, $block ) {

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
		<li>
			<a href="%1$s" target="%2$s"%3$s>
				<span>%4$s</span>
			</a>
		</li>',
			$href,
			$target,
			$rel,
			$link_text
		);
		return $output;
	}
}
