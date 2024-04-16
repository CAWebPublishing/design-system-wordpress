<?php
/**
 * Loads Design System <header> tag.
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// if the CAWeb theme is active.
$cagov_design_system_is_caweb_active_theme = cagov_design_system_is_caweb_active_theme();

/* Branding */
$cagov_design_system_logo          = ! empty( get_option( 'header_ca_branding', '' ) ) ? esc_url( get_option( 'header_ca_branding' ) ) : '';
$cagov_design_system_logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text' ) : cagov_design_system_get_attachment_post_meta( $cagov_design_system_logo, '_wp_attachment_image_alt' );

/* Search */
$cagov_design_system_google_search_id = get_option( 'ca_google_search_id', '' );

/* Translate */
$cagov_design_system_google_trans_enabled = get_option( 'ca_google_trans_enabled', false );
$cagov_design_system_google_trans_page = get_option( 'ca_google_trans_page', '' );
$cagov_design_system_google_trans_text = get_option( 'ca_google_trans_text', '' );
$cagov_design_system_google_trans_page_new_window = get_option( 'ca_google_trans_page_new_window', '' );
$cagov_design_system_google_trans_icon = get_option( 'ca_google_trans_icon', '' );

/* Navigation */
$cagov_design_system_menu_style = get_option( 'ca_default_navigation_menu', 'singlelevel' );
$cagov_design_system_nav_home_link = ! is_front_page() && get_option( 'ca_home_nav_link', true );
?>


<header>
	<!--div id="skip-to-content"><a href="#main-content">Skip to content</a></div-->
	<?php if ( ! empty( $cagov_design_system_logo ) ) : ?>
	<!-- Site Logo -->
	<figure>
		<a href="/">
		<img
			src="<?php print esc_url( $cagov_design_system_logo ); ?>"
			alt="<?php print esc_attr( $cagov_design_system_logo_alt_text ); ?>" />
		<span class="sr-only"><?php print get_bloginfo('name'); ?></span>
		</a>
	</figure>
	<?php endif; ?>
	<!-- Include Navigation -->
	<?php
		if ( has_nav_menu( 'header-menu' ) ) {
			wp_nav_menu(
				array(
					'theme_location'                     => 'header-menu',
					'caweb_nav_type'                     => $cagov_design_system_menu_style,
					'caweb_home_link'                    => $cagov_design_system_nav_home_link,
				)
			);
		} else {
			?>
				<nav id="navigation" class="main-navigation hidden-print nav">
					<ul id="nav_list" class="top-level-nav">
						<li class="nav-item">
							<a href="#" class="first-level-link">
								<span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span>
								<strong>There is no Navigation Menu set</strong>
							</a>
						</li>
					</ul>
				</nav>
			<?php
		}
	?>
	<!-- Search -->
  	<button class="search-svg"></button>

  	<?php if ( 'custom' === $cagov_design_system_google_trans_enabled && ! empty( $cagov_design_system_google_trans_page ) ) : ?>
		<a 
			id="caweb-gtrans-custom" 
			target="<?php print esc_attr( $cagov_design_system_google_trans_page_new_window ); ?>" 
			href="<?php print esc_url( $cagov_design_system_google_trans_page ); ?>" 
			aria-label="Google Custom Translate">
			<?php if ( ! empty( $cagov_design_system_google_trans_icon ) ) : ?>
				<span class="ca-gov-icon-<?php print esc_attr( $cagov_design_system_google_trans_icon ); ?>"></span>
			<?php endif; ?>
			<?php if ( ! empty( $cagov_design_system_google_trans_text ) ) : ?>
				<span><?php print esc_html( $cagov_design_system_google_trans_text ); ?></span>
			<?php endif; ?>
		</a>
	<?php endif; ?>

	<?php if ( true === $cagov_design_system_google_trans_enabled || 'standard' === $cagov_design_system_google_trans_enabled ) : ?>
		<div class="standard-translate" id="google_translate_element"></div>
	<?php endif; ?>

	<!-- BEGIN CAgov Offical  -->
	<a
		id="caGov"
		class="ca-gov-svg"
		title="CA.gov home page"
		aria-description="CA.gov home page"
		tabindex="0">
	</a>
	<!-- END CAgov Offical -->

</header>
