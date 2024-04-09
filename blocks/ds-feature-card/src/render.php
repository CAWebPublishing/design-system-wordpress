<?php
/**
 * Ds Feature Card Dynamic Renderer Functions
 *
 * @package caweb
 * 
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 */

$title = isset( $attributes['title'] ) ? $attributes['title'] : '';

?>
<div>
	<div class="cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block">
		<div>
			<div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
				<h1><?php print $title ?></h1>
				<div class="cagov-feature-card-body-content"><?php print $content; ?></div>
			</div>
			<?php  if( isset( $attributes['mediaID'] ) && ! empty( $attributes['mediaID'] ) ):  ?>
			<div>
				<div>
					<img 
						class="cagov-featured-image" 
						src="<?php print $attributes['mediaURL'] ?>" 
						alt="<?php print $attributes['mediaAlt'] ?>"/>
				</div>
			</div>
			<?php endif; ?>
		</div>
	</div>
</div>