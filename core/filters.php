<?php
/**
 * Design System Filters
 *
 * @package cagov-design-system
 */

add_filter( 'wp_kses_allowed_html', 'cagov_design_system_allowed_html', 15, 2 );


/**
 * Allowed HTML for wp_kses
 *
 * @link https://developer.wordpress.org/reference/functions/wp_kses/
 * @link https://developer.wordpress.org/reference/functions/wp_kses_allowed_html/
 *
 * @param  array        $allowedposttags HTML tags to include.
 * @param  string|array $context The context for which to retrieve tags. Allowed values are 'post', 'strip', 'data', 'entities', or the name of a field filter such as 'pre_user_description'.
 * @return array
 */
function cagov_design_system_allowed_html( $allowedposttags, $context ) {

	if ( 'post' !== $context ) {
		return $allowedposttags;
	}

	$allowed = array(
		'svg'     => array(
			'x'           => true,
			'y'           => true,
			'width'       => true,
			'height'      => true,
			'style'       => true,
			'version'     => true,
			'viewbox'     => true,
			'xml:space'   => true,
			'xmlns:xlink' => true,
			'xmlns'       => true,
		),
		'path'    => array(
			'class' => true,
			'd'     => true,
		),
		'g'       => array(),
		'polygon' => array(
			'class'  => true,
			'points' => true,
		),
	);

	foreach ( $allowed as $tag => $attr ) {

		$allowedposttags[ $tag ] = isset( $allowedposttags[ $tag ] ) ?
			array_merge( $allowedposttags[ $tag ], $attr ) :
			$attr;
	}

	add_filter( 'safe_style_css', 'cagov_design_system_safe_style_css' );

	return $allowedposttags;
}

/**
 * Safe Style CSS
 *
 * @see https://developer.wordpress.org/reference/functions/safecss_filter_attr/
 *
 * @param  array $styles A string of CSS rules.
 * @return array
 */
function cagov_design_system_safe_style_css( $styles ) {
	$styles[] = 'list-style-position';

	return $styles;
}
