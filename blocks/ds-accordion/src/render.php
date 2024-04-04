<?php
/**
 * Ds Accordion Dynamic Renderer Functions
 *
 * @package caweb
 * 
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 */

 $title = isset( $attributes['title'] ) && ! empty( $attributes['title'] ) ? $attributes['title'] : 'Accordion Title';

 ?>
<div>
	<cagov-accordion>
		<details>
			<summary><?php print $title; ?></summary>
			<div class="accordion-body">
			<?php print $content; ?>
			</div>
		</details>
	</cagov-accordion>
</div>