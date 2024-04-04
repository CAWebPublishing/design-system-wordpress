<?php
/**
 * Page Navigation Links Dynamic Renderer Functions
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

if ( $is_link ) {
	$link_info = $attributes['linkInfo'];
	$href      = isset( $link_info['url'] ) && ! empty( $link_info['url'] ) ? $link_info['url'] : $href;
	$target    = isset( $link_info['linkTarget'] ) && ! empty( $link_info['linkTarget'] ) && $link_info['linkTarget'] ? '_blank' : $target;
}

$rel = '_self' === $target ? ' rel="noopener"' : '';

?>
<li>
	<a 
		href="<?php print $href; ?>" 
		target="<?php print $target; ?>"<?php print $rel; ?>>
		<span><?php print $link_text; ?></span>
	</a>
</li>