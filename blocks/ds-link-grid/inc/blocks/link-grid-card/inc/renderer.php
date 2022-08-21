<?php
/**
 * Link Grid Card Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_link_grid_card_block_renderer') ){
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
	function caweb_link_grid_card_block_renderer( $attributes, $content, $block ) {
		/**
		 * Declare variable variables out of the attributes
		 *@see https://www.php.net/manual/en/language.variables.variable.php
		*/
		foreach ( $attributes as $attr => $val ) {
			$$attr = $val;
		}

		if( ! isset($linkText ) ){
			$linkText  = 'Link Text';
		}

		$is_link = isset( $linkInfo ) && ! empty( $linkInfo );

		$href   = $is_link && isset( $linkInfo['url'] ) && ! empty( $linkInfo['url'] ) ? $linkInfo['url'] : '#';
		$target = $is_link && isset( $linkInfo['linkTarget'] ) && ! empty( $linkInfo['linkTarget'] ) && $linkInfo['linkTarget'] ? '_blank' : '_self';
		$rel    = '_self' === $target ? ' rel="noopener"' : '';

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
			$linkText
		);

		return $output;
	}
}
