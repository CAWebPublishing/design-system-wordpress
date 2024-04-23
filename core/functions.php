<?php
/**
 * Design System Helper Functions
 *
 * @package cagov-design-system
 */

/**
 * Load Minified Version of a file
 *
 * @param  string $f File to load.
 * @param  mixed  $ext Extension of file, default css.
 *
 * @return string
 */
function cagov_design_system_get_min_file( $f, $ext = 'css' ) {
	/* if a minified version exists load it */
	if ( file_exists( CAGOV_DESIGN_SYSTEM_DIR . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAGOV_DESIGN_SYSTEM_URL . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAGOV_DESIGN_SYSTEM_URL . $f;
	}
}

/**
 * Returns whether CAWeb is the active theme.
 *
 * @return bool
 */
function cagov_design_system_is_caweb_active_theme() {
	return 'CAWeb' === wp_get_theme()->get( 'Name' );
}

/**
 * Returns Design System State logo svg.
 *
 * @return string
 */
function cagov_design_system_state_logo() {
	return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34px" height="34px" viewbox="0 0 44 34" style="enable-background:new 0 0 44 34;" xml:space="preserve">
		<path class="ca" d="M27.4,14c0.1-0.4,0.4-1.5,0.9-3.2c0.1-0.5,0.4-1.3,0.9-2.7c0.5-1.4,0.9-2.5,1.2-3.3c-0.9,0.6-1.8,1.4-2.7,2.3
			c-3.2,3.5-6.9,7.6-8.3,9.8c0.5-0.1,1.5-1.2,4.7-2.3C26.3,14,27.4,14,27.4,14L27.4,14z M26.9,16.2c-10.1,0-14.5,16.1-21.6,16.1
			c-1.6,0-2.8-0.7-3.7-2.1c-0.6-0.9-0.8-2-0.8-3.1c0-2.9,1.4-6.7,4.2-11.1c2.4-3.8,4.9-6.9,7.5-9.2c2.3-2,4.2-3,5.9-3
			c0.9,0,1.6,0.3,2.1,1C20.8,5.2,21,5.8,21,6.5c0,1.3-0.4,2.8-1.3,4.5c-0.8,1.5-1.7,2.8-2.9,3.9c-0.8,0.8-1.4,1.1-1.8,1.1
			c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.5,0.4-1,1.2-1.6c1.2-0.9,2.1-1.8,2.8-2.9c1-1.5,1.5-2.8,1.5-3.8
			c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.5-0.3-0.8-0.3c-0.7,0-1.8,0.5-3.2,1.6c-1.6,1.2-3.2,2.9-5,5C8,14.8,6.3,17.4,5.2,20
			c-1.2,2.7-1.8,5-1.8,6.9c0,0.9,0.3,1.7,0.8,2.3c0.6,0.7,1.3,1.1,2.1,1.1c3.2-0.1,7.2-7.4,8.4-9.1C27,4.3,27.9,4.3,29.8,2.5
			c1.1-1,1.9-1.6,2.5-1.6c0.4,0,0.7,0.1,0.9,0.4c0.2,0.3,0.3,0.5,0.3,0.9c0,0.4-0.2,1-0.6,2c-0.7,1.7-1.3,3.5-1.9,5.4
			c-0.5,1.7-0.9,3-1,3.9c0.2,0,0.4,0,0.5,0c0.4,0,0.7,0,1,0c0.8,0,1.2,0.3,1.2,0.9c0,0.3-0.1,0.5-0.3,0.8c-0.2,0.3-0.4,0.4-0.6,0.5
			c-0.1,0-0.3,0-0.7,0c-0.8,0-1.4,0-1.7,0.1c-0.1,0.4-0.5,4.1-1.1,4.2C26.7,21.5,26.8,16.7,26.9,16.2L26.9,16.2z"/>
		<g>
			<path class="gov" d="M16.8,27.2c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1c-0.3,0.3-0.7,0.5-1.1,0.5
			c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1C16,27.4,16.4,27.2,16.8,27.2L16.8,27.2z"/>
			<path class="gov" d="M26.7,22.9l-1.1,1.1c-0.7-0.8-1.5-1.1-2.5-1.1c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.6-0.8,1.2-0.8,2
			c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.8,2.2,0.8c0.6,0,1-0.1,1.4-0.3c0.4-0.2,0.7-0.6,0.9-1.1h-2.4v-1.5h4.2l0,0.4
			c0,0.7-0.2,1.4-0.6,2.1c-0.4,0.7-0.9,1.2-1.5,1.5c-0.6,0.3-1.3,0.5-2.1,0.5c-0.9,0-1.7-0.2-2.3-0.6c-0.7-0.4-1.2-0.9-1.6-1.6
			c-0.4-0.7-0.6-1.5-0.6-2.3c0-1.1,0.4-2.1,1.1-2.9c0.9-1,2-1.5,3.4-1.5c0.7,0,1.4,0.1,2.1,0.4C25.7,22,26.2,22.4,26.7,22.9
			L26.7,22.9z"/>
			<path class="gov" d="M32.2,21.4c1.2,0,2.2,0.4,3.1,1.3c0.9,0.9,1.3,1.9,1.3,3.2c0,1.2-0.4,2.3-1.3,3.1c-0.8,0.9-1.9,1.3-3.1,1.3
			c-1.3,0-2.3-0.4-3.2-1.3c-0.8-0.9-1.3-1.9-1.3-3.1c0-0.8,0.2-1.5,0.6-2.2c0.4-0.7,0.9-1.2,1.6-1.6C30.7,21.5,31.4,21.4,32.2,21.4
			L32.2,21.4z M32.2,22.9c-0.8,0-1.4,0.3-2,0.8c-0.5,0.5-0.8,1.2-0.8,2.1c0,0.9,0.3,1.7,1,2.2c0.5,0.4,1.1,0.6,1.8,0.6
			c0.8,0,1.4-0.3,1.9-0.8c0.5-0.6,0.8-1.2,0.8-2c0-0.8-0.3-1.5-0.8-2C33.6,23.2,33,22.9,32.2,22.9L32.2,22.9z"/>
			<polygon class="gov" points="36.3,21.6 38,21.6 40.1,27.6 42.2,21.6 43.9,21.6 40.8,30 39.3,30 36.3,21.6 	"/>
		</g>
	</svg>';
}

/**
 * Returns array of Design System Menu Types
 *
 * @param  string $mode Which navigation mode to return.
 * @return array
 */
function cagov_design_system_nav_menu_types( $mode = 'all' ) {
	$mode = null === $mode || is_array( $mode ) ? get_option('cagov_design_system_mode', 'default') : $mode;

	$navigations = array(
		'default' => array(
			'dropdown'     => 'Drop Down',
			'singlelevel'  => 'Single Level',
		),
		'campaign' => array(
			'singlelevel'  => 'Single Level',
		)
	);

	return 'all' !== $mode && isset( $navigations[$mode] ) ? $navigations[$mode] : $navigations;
}

/**
 * Retrieve Design System Color Schemes
 *
 * @param array $colors Array of Color Schemes supported by Design System.
 * @return array
 */
function cagov_design_system_color_schemes( $colors = array() ) {
	return array(
		'cagov',
		'cannabis',
		'drought',
	);
}


/**
 * Retrieve Design System Social Media Links
 *
 * @param  array $social_links Array of Social Media Links.
 * @return array
 */
function cagov_design_system_social_media_links( $social_links = array() ) {
	$cagov_social_links = array(
		'Email'           => 'ca_social_email',
		'Facebook'        => 'ca_social_facebook',
		'Flickr'          => 'ca_social_flickr',
		'Github'          => 'ca_social_github',
		'Instagram'       => 'ca_social_instagram',
		'LinkedIn'        => 'ca_social_linkedin',
		'X'         => 'ca_social_twitter',
		'YouTube'         => 'ca_social_youtube',
	);

	return $cagov_social_links;
}

/**
 * TinyMCE Settings
 *
 * @param  array $settings TinyMCE Settings.
 *
 * @return array
 */
function cagov_design_system_tiny_mce_settings( $settings = array() ) {
	$color      = get_option( 'ca_site_color_scheme', 'cagov' );
	$editor_css = cagov_design_system_get_min_file( "css/cagov-design-system-$color.css" );

	$css = array(
		includes_url( '/css/dashicons.min.css' ),
		includes_url( '/js/tinymce/skins/wordpress/wp-content.css' ),
		$editor_css,
	);

	$settings['tinymce']['content_css'] = implode( ',', $css );

	return $settings;
}

/**
 * Retrieve Color Schemes
 *
 * @param  array $colors Retrieve information on a specific colorscheme.
 *
 * @return array
 */
function cagov_design_system_template_colors( $colors = array() ) {
	$template_colors = array(
		'cagov' => array(
			'highlight' => '#ECB32D',
			'primary'   => '#165AC2',
		),
		'cannabis' => array(
			'highlight' => '#ECB32D',
			'primary'   => '#165AC2',
		),
		'drought' => array(
			'highlight' => '#ECB32D',
			'primary'   => '#165AC2',
		),
	);

	return $template_colors;
}

/**
 * Return Attachment Meta Field for given urls
 *
 * @param  string|array $image_url Attachment URL. Can be string or an array of URLS.
 * @param  string       $meta_key Meta Field to return. If empty all fields are returned.
 *
 * @return string|array
 */
function cagov_design_system_get_attachment_post_meta( $image_url, $meta_key = '' ) {

	if ( empty( $image_url ) ) {
		return '';
	} elseif ( is_string( $image_url ) || is_array( $image_url ) ) {
		$query = array(
			'post_type'  => 'attachment',
			'fields'     => 'ids',
		);

		$image_urls = is_string( $image_url ) ? array( $image_url ) : $image_url;
		$imgs       = array();

		foreach ( $image_urls as $i => $img ) {
			// phpcs:disable -- Slow meta query ok.
			$query['meta_query'] = array(
				array(
					'key'     => '_wp_attached_file',
					'value'   => basename( $img ),
					'compare' => 'LIKE',
				),
			);
			// phpcs:enable
			$ids = get_posts( $query );

			if ( ! empty( $ids ) ) {
				$imgs[] = get_post_meta( $ids[0], $meta_key, true );
			}
		}

		if ( empty( $imgs ) ) {
			return 0;
		} else {
			return 1 < count( $imgs ) ? $imgs : $imgs[0];
		}
	}
}

	/**
	 * Returns all child nav_menu_items under a specific parent
	 *
	 * @source https://wpsmith.net/2011/how-to-get-all-the-children-of-a-specific-nav-menu-item/
	 * @param  int   $parent_id The parent nav_menu_item ID.
	 * @param  array $nav_menu_items Array of Nav Menu Objects.
	 * @param  bool  $depth Gives all children or direct children only.
	 *
	 * @return array
	 */
function cagov_design_system_get_nav_menu_item_children( $parent_id, $nav_menu_items, $depth = true ) {
	$nav_menu_item_list = array();

	foreach ( (array) $nav_menu_items as $nav_menu_item ) {
		if ( (int) $nav_menu_item->menu_item_parent === (int) $parent_id ) {
			$nav_menu_item_list[] = $nav_menu_item;
			if ( $depth ) {
				$children = caweb_get_nav_menu_item_children( $nav_menu_item->ID, $nav_menu_items );
				if ( $children ) {
					$nav_menu_item_list = array_merge( $nav_menu_item_list, $children );
				}
			}
		}
	}

	return $nav_menu_item_list;
}
