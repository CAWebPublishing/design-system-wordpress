<?php
/**
 * Cdt Ds Cards Dynamic Renderer Functions
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
$orientation = isset( $attributes['orientation'] ) ? $attributes['orientation'] : '';
$interactive = isset( $attributes['interactive'] ) ? $attributes['interactive'] : '';

 ?>
 
 <ul class="cards"<?php print $interactive ? ' data-action="interactive"' : '' ?><?php print 'top' !== $orientation ? " data-orientation=\"media-$orientation\"" : '';?>>
	<li>
	    <div class="card-text">
            <h2><?php print $title; ?></h2>
            <?php print $content; ?>
		</div>
		<?php  if( isset( $attributes['mediaID'] ) && ! empty( $attributes['mediaID'] ) ):  ?>
            <img src="<?php print $attributes['mediaURL'] ?>" alt="<?php print $attributes['mediaAlt'] ?>"/>
        <?php endif; ?>
	</li>
</ul>
