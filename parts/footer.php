<?php
/**
 * Design System Footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Detect plugin. For use on Front End only.
 *
 *  @link https://developer.wordpress.org/reference/functions/is_plugin_active/
 */
require_once ABSPATH . 'wp-admin/includes/plugin.php';

$cagov_design_system_is_caweb_plugin_active = is_plugin_active( 'caweb-admin/caweb-admin.php' ) || is_plugin_active_for_network( 'caweb-admin/caweb-admin.php' );


?>
<!-- Footer -->
<footer class="hidden-print">
	<cagov-back-to-top data-hide-after="7000" data-label="Back to top"></cagov-back-to-top>
	<div class="bg-light-grey">
		<div class="container">
			<a href="https://ca.gov" class="cagov-logo" title="ca.gov" target="_blank" rel="noopener">
				<?php print wp_kses( cagov_design_system_state_logo(), 'post' ); ?>
			</a>

			<div class="footer-secondary-links">
				<?php
				if ( has_nav_menu( 'footer-menu' ) ) {
					wp_nav_menu(
						array(
							'theme_location' => 'footer-menu',
							'style'          => 'footer',
						)
					);
				} else {
					?>
					<a>There is no Navigation Menu set</a>
					<?php
				}
				?>
			</div>

			
		<?php
			if ( cagov_design_system_is_caweb_active_theme() ) {
				// social media.
				$caweb_social_media = caweb_get_site_options( 'social' );
				$caweb_social_links = '';
			
				$caweb_opened = false;

				foreach ( $caweb_social_media as $caweb_share => $caweb_option ) {
					$caweb_share_email  = 'ca_social_email' === $caweb_option ? true : false;
					$caweb_mail_subject = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
					$caweb_mail_body    = rawurlencode( get_permalink() );
					$caweb_mailto       = $caweb_share_email ? "mailto:?subject=$caweb_mail_subject&body=$caweb_mail_body" : '';
				
					/**
					 * These are being removed
					 *
					 * @todo remove once version 5.5 is obsolete
					 */
					$caweb_social_exclusions = array(
						'ca_social_snapchat',
						'ca_social_pinterest',
						'ca_social_rss',
						'ca_social_google_plus',
						'ca_social_flickr',
					);


					// if Social Media icon is on for the footer
					if ( ! in_array( $caweb_option, $caweb_social_exclusions, true ) &&
						get_option( $caweb_option . '_footer' ) &&
						( $caweb_share_email || ! empty( get_option( $caweb_option, '' ) ) )
					) {
						// open ul tag only once.
						if ( ! $caweb_opened ) {
							$caweb_opened = true;
							?>
							<ul class="socialsharer-container">
							<?php
						}

						// get social media info
						$caweb_social_url = $caweb_share_email ? $caweb_mailto : get_option( $caweb_option );

						$caweb_social_default_title = "Share via $caweb_share";
						$caweb_social_title         = get_option( "${caweb_option}_hover_text", $caweb_social_default_title );
		
						$caweb_social_target = get_option( "${caweb_option}_new_window", true ) ? '_blank' : '_self';

						// render social media icon
						?>
							<li>
								<a 
									class="no-underline"
									href="<?php print esc_url( $caweb_social_url ); ?>" 
									title="<?php print esc_attr( $caweb_social_title ); ?>"
									target="<?php print esc_attr( $caweb_social_target ); ?>"
								>
								<?php if ( ! empty( $caweb_option ) ) : ?>
										<span class="ca-gov-icon-<?php print esc_attr( substr( $caweb_option, 10 ) ); ?>"></span>
									<?php endif; ?>
									<span class="sr-only"><?php print esc_attr( $caweb_share ); ?></span>
								</a>
							</li>
						<?php

					}

				}

				// close social media ul tag if it was opened.
				if( $caweb_opened ){
					?>
					</ul>
					<?php
				}
			}
		?>

		</div>
		<div class="container pt-0">
			<!-- Copyright Statement -->
			<p class="m-md-r-a">Copyright <span aria-hidden="true">&copy;</span> <script>document.write(new Date().getFullYear())</script> State of California</p>

			<?php if ( $cagov_design_system_is_caweb_plugin_active ) : ?>
			<p>Powered by: CAWeb Publishing Service</p>
			<?php endif; ?>
		</div>
	</div>
</footer>
