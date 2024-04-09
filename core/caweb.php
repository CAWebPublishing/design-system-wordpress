<?php
/**
 * CAWeb Theme Overrides
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// CAWeb theme option overrides.
add_action( 'option_ca_default_navigation_menu', 'cagov_design_system_ca_default_navigation_menu' );
add_action( 'option_ca_site_color_scheme', 'cagov_design_system_ca_site_color_scheme' );
add_action( 'pre_update_option_ca_fav_ico', 'cagov_design_system_update_options', 10, 3 );
add_action( 'caweb_options_general_custom_fields', 'cagov_design_system_options');
add_action( 'caweb_search_form', 'cagov_design_system_search_form', 9);

// CAWeb theme filters.
add_filter( 'caweb_nav_menu_types', 'cagov_design_system_nav_menu_types' );
add_filter( 'caweb_tiny_mce_settings', 'cagov_design_system_tiny_mce_settings' );
add_filter( 'caweb_template_colors', 'cagov_design_system_template_colors' );
add_filter( 'caweb_page_container_class', 'cagov_design_system_page_container_class' );
add_filter( 'caweb_main_content_class', 'cagov_design_system_main_content_class' );
add_filter( 'caweb_social_media_links', 'cagov_design_system_social_media_links' );

add_filter( 'body_class', 'cagov_design_system_body_class', 25, 2 );


/**
 * Ensures the CAWeb Theme navigation menu is supported by the Design System.
 *
 * @link https://developer.wordpress.org/reference/hooks/option_option/
 * @param  mixed $val Value of the option. If stored serialized, it will be unserialized prior to being returned.
 * @return mixed
 */
function cagov_design_system_ca_default_navigation_menu( $val ) {
	return array_key_exists( $val, cagov_design_system_nav_menu_types() ) ? $val : 'dropdown';
}

/**
 * Ensures the CAWeb Theme colorscheme is supported by the Design System.
 *
 * @link https://developer.wordpress.org/reference/hooks/option_option/
 * @param  mixed $val Value of the option. If stored serialized, it will be unserialized prior to being returned.
 * @return mixed
 */
function cagov_design_system_ca_site_color_scheme( $val ) {
	foreach ( cagov_design_system_template_colors() as $color => $data ) {
		if ( str_replace( ' ', '', $color ) === $val ) {
			return $val;
		}
	}
	return 'cagov';
}

/**
 * Classes for the page-container
 *
 * @param string $class Class for the page-container.
 * @return string
 */
function cagov_design_system_page_container_class( $class ) {
	$class = str_replace('page-container ', '', $class);
	$class = "page-container-ds $class";
	return $class;
}

/**
 * Classes for the main-content
 *
 * @param string $class Class for the main-content.
 * @return string
 */
function cagov_design_system_main_content_class( $class ) {
	$class = str_replace('main-content ', '', $class );
	$class = "main-content-ds $class";
	return $class;
}

/**
 *
 * Filters the list of CSS body class names for the current post or page.
 *
 * @link https://developer.wordpress.org/reference/hooks/body_class/
 * @param  array $wp_classes An array of body class names.
 * @param  array $extra_classes An array of additional class names added to the body.
 *
 * @wp_filter add_filter( 'body_class','cagov_design_system_body_class' , 20 , 2 );
 * @return array
 */
function cagov_design_system_body_class( $wp_classes, $extra_classes ) {

	/* List of the classes that need to be removed */
	$blacklist = array(
		'et_secondary_nav_dropdown_animation_fade',
		'et_primary_nav_dropdown_animation_fade',
		'et_fixed_nav',
		'et_show_nav',
		'et_right_sidebar',
		'sticky_nav'
	);

	/* List of extra classes that need to be added to the body */
	$whitelist[] = 'design-system';

	/* Remove any classes in the blacklist from the wp_classes */
	$wp_classes = array_diff( $wp_classes, $blacklist );

	/* Return filtered wp class */
	return array_merge( $wp_classes, (array) $whitelist );
}

/**
 * Removes the Search Form from the Serp Page.
 *
 * @return void
 */
function cagov_design_system_search_form(){
	remove_action('caweb_search_form', 'caweb_search_form');
}

/**
 * Design System Administration Menu Setup
 * 
 * @link https://developer.wordpress.org/reference/hooks/pre_update_site_option_option/
 *
 * @param  mixed $value New value of the network option.
 * @param  mixed $old_value Old value of the network option.
 * @param  mixed $option Option name.
 * 
 * @return void
 */
function cagov_design_system_update_options( $value, $old_value, $option ){
	// if saving.
	if ( isset( $_POST['caweb_submit'], $_POST['caweb_theme_options_nonce'] ) &&
	wp_verify_nonce( sanitize_key( $_POST['caweb_theme_options_nonce'] ), 'caweb_theme_options' ) ) {
		$mode = isset( $_POST['cagov_design_system_mode'] ) ? $_POST['cagov_design_system_mode'] : 'default';
		
		update_option('cagov_design_system_mode', $mode );
	}

	return $value;

}

/**
 * Adds Custom Fields to the CAWeb Options 
 *
 * @return void
 */
function cagov_design_system_options(){
	$mode = get_option('cagov_design_system_mode', 'default' );
	?>
	<div class="row">
		<div class="mb-3 col-sm-5">
			<label for="cagov_design_system_mode" class="d-block mb-0"><strong>Design System Mode</strong></label>
			<small class="mb-2 text-muted d-block">Select a Design System Mode.</small>
			<select id="cagov_design_system_mode" name="cagov_design_system_mode" class="w-50 form-control">
				<option value="default"<?php print 'default' === $mode ? ' selected' : '' ?>>Default</option>
				<option value="campaign"<?php print 'campaign' === $mode ? ' selected' : '' ?>>Campaign</option>
			</select>
		</div>
	</div>
	<?php
}