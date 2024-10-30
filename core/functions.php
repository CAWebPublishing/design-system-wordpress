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
	return '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 149.31 83.66">
		<defs>
			<linearGradient id="a" x1="101.65" y1="39.47" x2="101.65" y2="83.66" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#8b5a24"/>
			<stop offset="1" stop-color="#441a12"/>
			</linearGradient>
			<linearGradient id="b" x1="63.41" y1="0" x2="63.41" y2="83.64" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#1b93b8"/>
			<stop offset=".6" stop-color="#1b93b8"/>
			<stop offset="1" stop-color="#04628d"/>
			</linearGradient>
		</defs>
		<path d="M55.44 38.37c.34-.24 6.27-4.36 6.35-4.72h-7.88c-.31 0-.52 0-.64-.4h-.01c-.73-2.26-2.41-7.23-2.66-7.36-.82 2.5-1.64 4.99-2.44 7.48-.09.28-.28.29-.51.29-1.78-.03-7.09.09-8.11.09.18.16 4.41 3.17 6.47 4.63.26.18.39.31.27.69-.66 1.95-2.28 6.84-2.28 7.35.15.05 4.12-2.8 6.04-4.16q.77-.55 1.54 0c.06.04 4.05 2.84 6.01 4.21.11-.36-1.61-5.23-2.36-7.44-.1-.32-.08-.45.21-.66" style="stroke-width:0;fill:#b91f39"/>
		<path d="m145.41 63.47-.08.03c-.1-2.32-2-7.07-3.66-8.58.71-2.13-.28-3.21-.85-3.93-.34-.42-1.47-.71-1.97-.91-1.79-2.72-5.62-5.19-10.99-6.77-3.48-1.02-7.6-1.68-12.25-1.78-.21 0-.44-.01-.69-.01-.47 0-.99.02-1.55.05-4.26.23-10.8 1.18-12.33 1.18h-.13c-.64-.03-2.22-.73-4.09-1.47-2.2-.88-4.77-1.81-6.67-1.81-.2 0-.4 0-.58.03-1.79.22-6.01 2.91-7.57 3.77-1.07.59-4.53 2.07-5.52 2.7-.21.07-.68.07-.88.14-2.47.82-4.21 3.65-4.95 4.14-.08-.3-1.01-1.59-2.32-1.59-.15 0-.31.02-.47.06-1.59.66-1.48 1.84-1.48 2.41-.31-.12-.77-.69-1.64-.69-.31 0-.68.07-1.09.25-1.75.94-.81 2.49-1.23 3.02-.63.84-2.7 2.91-3.48 4.34-.33.59.03 2.13-.22 2.74-.69 1.68-4.4 4.66-4.75 5.33-.12.31.88 1.31 2.11 2.28 1.13.89 2.43 1.73 3.24 1.93 2.27 0 7.14-.94 8.2-1.06h.01c.31 0 .87.21 1.59.4.63.16 1.39.32 2.25.32.23 0 .48 0 .72-.03 1.11-.23 1.85-.74 2.46-1.35 1.01-1.02 1.59-2.31 2.74-2.82.88-.4 2-.69 2.97-.69.48 0 .93.07 1.29.24-1.83 3.28-1.43 7.67-2.07 8.3-.71.69-1.27 1.41-1.71 2.09-1.57 2.41-1.79 4.6-2.55 5.11-.21.14-.48.19-.78.19-.86 0-2.03-.41-2.85-.41-.2 0-.38.02-.54.08-.98.36-3.26 2.46-2.42 2.96.26.02 4 .02 7.93.02h3.41c.1 0 2.19-1.91 2.29-1.91h5.53c.52-.08.47-.91 2.86-2.13 2.7-1.06 1.42-6.28 4.88-10.27.03 0 1.06-.97 1.3-.97 1.2 0 3.22 2.18 10.49 2.18s9.03-2.51 10.03-2.51c.5 0 1.5.75 1.5 1-3.25 5.52 4.92 11.72 4.27 12.11-.02.02-.05.02-.08.02-.28 0-1.07-.44-2.26-.44-.48 0-1.02.07-1.62.27-1.32.44-2.39 2.11-1.36 2.62.27 0 3.52.01 6.75.01 1.8 0 3.6 0 4.88-.01.41-.05.38-.83.36-1.59-.01-.5-.02-.99.09-1.25.34-.44.64-2 1.51-3.09.85-.93 1.51-1.64 2.21-1.64.29 0 .57.13.88.4 1.53.84 5.23 1.3 7.33 2.06.87.32 1.48.67 1.52 1.14-.03.26-.24.34-.54.34q-.195 0-.42-.03c-.51-.07-1.18-.23-1.83-.23-.34 0-.66.05-.97.16-.95.36-1.91 1.39-2.18 2.14-.14.41-.09.73.29.82h8.7c1 0 .63-2 2.85-6.44.33-1.25-2.79-2.96-3.25-5.33-.29-1.55-.59-4.63-.63-7.63Z" style="fill:url(#a);stroke-width:0"/>
		<path d="M87.25 34.25 99.3 3.02h14.34l13.18 34.16c-3.46-.8-7.18-1.24-11.08-1.32h-.81c-.55 0-1.12.02-1.67.05h-.19c-.23.01-.48.03-.72.05L106.57 21l-6.05 15.67c-.17-.07-.34-.14-.5-.2-.35-.14-.71-.29-1.09-.44-2.88-1.15-5.94-2.21-8.77-2.21-.31 0-.82 0-1.43.1-.48.07-.99.2-1.5.36ZM42.16 83.64c8.86 0 15.54-1.75 21.44-4.99l1.27-3.22c-2.1.32-4.04.57-5.53.57h-.71l-.69-.18c-1.53-.39-3.33-1.39-5.36-2.99-.78-.61-2.03-1.62-2.99-2.95-2.22.51-4.6.79-7.2.79-17.12 0-29.08-11.91-29.08-28.97 0-16.11 12.62-28.74 28.74-28.74 9.03 0 17.03 3.6 24.44 10.98l5.24-13.3C63.54 3.82 53.19 0 42.39 0 31.01 0 20.43 4.05 12.61 11.41 4.48 19.06 0 29.82 0 41.71 0 66.4 17.34 83.64 42.16 83.64" style="stroke-width:0;fill:url(#b)"/>
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
		'TikTok'        => 'ca_social_tiktok',
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
