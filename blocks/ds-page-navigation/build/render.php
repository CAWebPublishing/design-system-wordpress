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
<div>
	<aside>
		<cagov-page-navigation>
			<nav aria-labelledby="page-navigation-label">
				<div class="label"><?php print $title ?></div>
				<ul><?php print $content ?></ul>
			</nav>
		</cagov-page-navigation>
	</aside>
</div>
