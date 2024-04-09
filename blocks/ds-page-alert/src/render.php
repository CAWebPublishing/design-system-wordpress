<?php
/**
 * Ds  Dynamic Renderer Functions
 *
 * @package caweb
 * 
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 */

 
 $message = isset( $attributes['message'] ) ? $attributes['message'] : '';
 $icon    = isset( $attributes['icon'] ) ? $attributes['icon'] : '';
?>
<div>
	<cagov-page-alert
		data-icon="ca-gov-icon-<?php print $icon ?>"
		data-message="<?php print $message ?>"
		></cagov-page-alert>
</div>
