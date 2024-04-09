<?php
/**
 * Link Grid Card Dynamic Renderer Functions
 *
 * @package caweb
 * 
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 */

$link_text = isset( $attributes['linkText'] ) ? $attributes['linkText'] : 'Link Text';

$is_link = isset( $attributes['linkInfo'] ) && ! empty( $attributes['linkInfo'] );

$href   = '#';
$target = '_self';
$rel = '';

if ( $is_link ) {
	$link_info = $attributes['linkInfo'];
	$href      = isset( $link_info['url'] ) && ! empty( $link_info['url'] ) ? $link_info['url'] : $href;
	$target    = isset( $link_info['linkTarget'] ) && ! empty( $link_info['linkTarget'] ) && $link_info['linkTarget'] ? '_blank' : $target;
}

$rel = '_self' === $target ? ' rel="noopener"' : '';

?>
<div>
	<a class="no-deco cagov-card" href="<?php print $href; ?>" target="<?php print $target; ?>"<?php print $rel; ?>>
		<span class="card-text"><?php print $link_text; ?></span>
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