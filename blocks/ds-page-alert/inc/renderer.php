<?php
/**
 * Ds  Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_ds_page_alert_block_renderer') ){
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
	function caweb_ds_page_alert_block_renderer( $attributes, $content, $block ) {
		/**
		 * Declare variable variables out of the attributes
		 *@see https://www.php.net/manual/en/language.variables.variable.php
		*/
		foreach ( $attributes as $attr => $val ) {
			$$attr = $val;
		}

		if( ! isset($message) ){
			$message = '';
		}

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
