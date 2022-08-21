<?php
/**
 * Page Navigation Links Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_page_navigation_links_block_renderer') ){
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
	function caweb_page_navigation_links_block_renderer( $attributes, $content, $block ) {
		/**
		 * Declare variable variables out of the attributes
		 *@see https://www.php.net/manual/en/language.variables.variable.php
		*/
		foreach ( $attributes as $attr => $val ) {
			$$attr = $val;
		}
		
		$is_link = isset( $linkInfo ) && ! empty( $linkInfo );

		$href   = $is_link && isset( $linkInfo['url'] ) && ! empty( $linkInfo['url'] ) ? $linkInfo['url'] : '#';
		$target = $is_link && isset( $linkInfo['linkTarget'] ) && ! empty( $linkInfo['linkTarget'] ) && $linkInfo['linkTarget'] ? '_blank' : '_self';
		$rel    = '_self' === $target ? ' rel="noopener"' : '';
	
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
			$linkText
		);
		return $output;
	}
}
