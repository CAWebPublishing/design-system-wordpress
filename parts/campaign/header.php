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

/* Navigation */
$cagov_design_system_menu_style = get_option( 'ca_default_navigation_menu', 'singlelevel' );
$cagov_design_system_nav_home_link = ! is_front_page() && get_option( 'ca_home_nav_link', true );
?>


<header>
	<nav class="nav">
		<div class="container">
			<?php if ( ! empty( $cagov_design_system_logo ) ) : ?>
			<!-- Site Logo -->
			<div class="logo">
				<figure>
					<a href="/">
					<img
						src="<?php print esc_url( $cagov_design_system_logo ); ?>"
						alt="<?php print esc_attr( $cagov_design_system_logo_alt_text ); ?>" />
					<span class="sr-only"><?php print get_bloginfo('name'); ?></span>
					</a>
				</figure>
			</div>
			<?php endif; ?>
			<div id="mainListDiv" class="main_list">
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
							<ul id="nav_list" class="top-level-nav">
								<li class="nav-item">
									<a href="#" class="first-level-link">
										<span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span>
										<strong>There is no Navigation Menu set</strong>
									</a>
								</li>
							</ul>
					<?php
				}
				?>
			</div>
			<span class="navTrigger">
				<i></i>
				<i></i>
				<i></i>
			</span>
		</div>
	</nav>
	

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
