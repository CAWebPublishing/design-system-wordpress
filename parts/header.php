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
?>


<header id="header" class="global-header">
	<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

	<!-- Utility Header -->
	<div class="official-header">
		<div class="container">
			<div class="official-logo">
					<a class="cagov-logo" href="https://ca.gov" title="ca.gov" target="_blank" rel="noopener">
						<?php print wp_kses( cagov_design_system_state_logo(), 'post' ); ?>
					</a>
				<p class="official-tag"><span class="desktop-only">Official website of the&nbsp;</span>State of California</p>
			</div> <!-- official-logo -->
			<div class="official-languages">

			<?php
			// if the CAWeb theme is active, add CAWeb Utility header.
			if ( cagov_design_system_is_caweb_active_theme() ) {
				$caweb_geo_locator_enabled          = 'on' === get_option( 'ca_geo_locator_enabled', false ) || get_option( 'ca_geo_locator_enabled', false );
				$caweb_contact_us_link              = get_option( 'ca_contact_us_link', '' );
				$caweb_contact_us_link              = get_option( 'ca_contact_us_link', '' );
				$caweb_google_trans_page            = get_option( 'ca_google_trans_page', '' );
				$caweb_google_trans_enabled         = get_option( 'ca_google_trans_enabled', false );
				$caweb_google_trans_page_new_window = get_option( 'ca_google_trans_page_new_window', true ) ? '_blank' : '_self';
				$caweb_google_trans_icon            = get_option( 'ca_google_trans_icon', '' );

				// Custom Utility.
				for ( $caweb_i = 1; $caweb_i < 4; $caweb_i++ ) {
					$caweb_url     = get_option( "ca_utility_link_$caweb_i" );
					$caweb_text    = get_option( "ca_utility_link_${caweb_i}_name" );
					$caweb_target  = get_option( "ca_utility_link_${caweb_i}_new_window" ) ? '_blank' : '_self';
					$caweb_enabled = get_option( "ca_utility_link_${caweb_i}_enable", false ) && ! empty( $caweb_url ) && ! empty( $caweb_text );

					if ( $caweb_enabled ) {
						?>
							<a 
								href="<?php print esc_url( $caweb_url ); ?>" 
								class="utility-custom-<?php print esc_attr( $caweb_i ); ?>"
								target="<?php print esc_attr( $caweb_target ); ?>"

								><?php print esc_html( $caweb_text ); ?></a>
							<?php

					}
				}

				// Geolocation.
				if ( $caweb_geo_locator_enabled ) {
					?>
							<button type="button" class="btn btn-xs btn-primary collapsed" onclick="showAddLocation()" aria-expanded="false"><span class="ca-gov-icon-compass" aria-hidden="true"></span> <span class="located-city-name">Set Location</span></button>	
					<?php
				}

				// Contact Us.
				if ( ! empty( $caweb_contact_us_link ) ) {
					?>
							<a class="utility-contact-us" href="<?php print esc_url( $caweb_contact_us_link ); ?>">Contact Us</a>
						<?php
				}

				// Google Custom Translate.
				if ( 'custom' === $caweb_google_trans_enabled && ! empty( $caweb_google_trans_page ) ) {
					?>
							<a id="caweb-gtrans-custom" class="no-underline" target="<?php print esc_attr( $caweb_google_trans_page_new_window ); ?>" href="<?php print esc_url( $caweb_google_trans_page ); ?>">
						<?php if ( ! empty( $caweb_google_trans_icon ) ) : ?>
								<span class="ca-gov-icon-<?php print esc_attr( $caweb_google_trans_icon ); ?>"></span>
							<?php endif; ?>
							</a>
						<?php
				} elseif ( true === $caweb_google_trans_enabled || 'standard' === $caweb_google_trans_enabled ) {
					?>
						<div id="google_translate_element"></div>
					<?php
				}
			}
			?>
			</div><!--official-languages-->
		</div><!--container-->
	</div><!--statewide header-->

	<div class="site-header">
		<div class="container<?php print ! empty( $cagov_design_system_logo ) ? ' with-logo' : ''; ?>">
			<!-- Branding -->
			<?php if ( ! empty( $cagov_design_system_logo ) ) : ?>
			<a href="/" class="grid-logo">
				<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $cagov_design_system_logo ); ?>" alt="<?php print esc_attr( $cagov_design_system_logo_alt_text ); ?>" />
			</a>
			<?php else : ?>
			<a class="grid-org-name" href="/">
				<span class="org-name-dept"><?php print esc_attr( get_bloginfo( 'name' ) ); ?></span>
				<span class="org-name-state">State of California</span>
			</a>
			<?php endif; ?>

			<!-- mobile navigation controls -->
			<div class="cagov-nav mobile-icons grid-mobile-icons">
				<?php if ( ! empty( $cagov_design_system_google_search_id ) ) : ?>
				<div class="cagov-nav mobile-search">
					<button class="search-btn" aria-expanded="true">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px"
							height="17px" viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">
							<path class="blue" d="M16.4,15.2l-4-4c2-2.6,1.8-6.5-0.6-8.9c-1.3-1.3-3-2-4.8-2S3.5,1,2.2,2.3c-2.6,2.6-2.6,6.9,0,9.6
							c1.3,1.3,3,2,4.8,2c1.4,0,2.9-0.5,4.1-1.4l4.1,4c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.7,16.2,16.7,15.6,16.4,15.2
							L16.4,15.2z M7,12c-1.3,0-2.6-0.5-3.5-1.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.7,5.6,2.1,7,2.1s2.6,0.5,3.5,1.4c0.9,0.9,1.4,2.2,1.4,3.5
							c0,1.3-0.5,2.6-1.4,3.5C9.5,11.5,8.3,12,7,12z"></path>
						</svg>
						<span>Search</span>
					</button>
				</div>
				<?php endif; ?>
				<button class="menu-trigger cagov-nav open-menu" aria-label="Navigation menu" aria-haspopup="true" aria-expanded="false"
					aria-owns="mainMenu" aria-controls="mainMenu">
					<div class="cagov-nav hamburger">
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
					</div>
					<div class="cagov-nav menu-trigger-label menu-label" data-openlabel="Open" data-closelabel="Close">Menu</div>
				</button>
			</div>

			<!-- search -->
			<div class="search-container search-container--small grid-search">
				<form class="site-search" action="<?php print esc_url( site_url( 'serp' ) ); ?>">
					<span class="sr-only" id="SearchInput">Custom Google Search</span>
					<input type="text" id="q" name="q" aria-labelledby="SearchInput" placeholder="Search this website" class="search-textfield">
					<button type="submit" class="search-submit">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								width="17px" height="17px" viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;"
								xml:space="preserve">
							<path class="blue" d="M16.4,15.2l-4-4c2-2.6,1.8-6.5-0.6-8.9c-1.3-1.3-3-2-4.8-2S3.5,1,2.2,2.3c-2.6,2.6-2.6,6.9,0,9.6
							c1.3,1.3,3,2,4.8,2c1.4,0,2.9-0.5,4.1-1.4l4.1,4c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.7,16.2,16.7,15.6,16.4,15.2
							L16.4,15.2z M7,12c-1.3,0-2.6-0.5-3.5-1.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.7,5.6,2.1,7,2.1s2.6,0.5,3.5,1.4c0.9,0.9,1.4,2.2,1.4,3.5
							c0,1.3-0.5,2.6-1.4,3.5C9.5,11.5,8.3,12,7,12z" />
						</svg>
						<span class="sr-only">Submit</span>
					</button>
					<button class="search-close">Close</button>
				</form>
			</div>
		</div>
	</div>

	<?php
	if ( has_nav_menu( 'header-menu' ) ) {
		/* Include Navigation */
		wp_nav_menu(
			array(
				'theme_location'               => 'header-menu',
				'style'                        => get_option( 'ca_default_navigation_menu', 'singlelevel' ),
			)
		);
	} else {
		?>
		<cagov-site-navigation>
			<div>
				<nav class="expanded-menu" role="navigation" aria-label="Site Navigation" aria-hidden="false" id="main-menu">
					<div class="expanded-menu-grid">
						<div class="expanded-menu-col js-cagov-navoverlay-expandable">
							<div class="expanded-menu-section">
								<a class="expanded-menu-section-header-link js-event-hm-menu">There is no Navigation Menu set</a> 
							</div>
						</div>
					</div>
				</nav>
			</div>
		</cagov-site-navigation>
		<?php
	}

	?>
</header>
