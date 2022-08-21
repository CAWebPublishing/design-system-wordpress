<?php
/**
 * Ds Link Grid Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_ds_link_grid_block_renderer') ){
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
	function caweb_ds_link_grid_block_renderer( $attributes, $content, $block ) {
		/**
		 * Declare variable variables out of the attributes
		 *@see https://www.php.net/manual/en/language.variables.variable.php
		*/
		foreach ( $attributes as $attr => $val ) {
			$$attr = $val;
		}

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
