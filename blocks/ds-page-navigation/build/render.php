<?php
/**
 * Ds Page Navigation Dynamic Renderer Functions
 *
 * @package caweb
 * 
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 */

 $title = isset( $attributes['title'] ) ? $attributes['title'] : 'On this page';

 ?>
 <aside>
	<cagov-page-navigation data-selector=".page-container-ds" data-type="wordpress" data-label="<?php print $title; ?>">
	</cagov-page-navigation>
</aside>
