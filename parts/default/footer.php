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
$mode = get_option('cagov_design_system_mode', 'default');


?>
<!-- Footer -->
<footer class="hidden-print">
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

			<?php require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/socialshare.php"; ?>

		</div>
		<div class="container pt-0">
			<!-- Copyright Statement -->
			<p class="m-md-r-a">Copyright <span aria-hidden="true">&copy;</span> <script>document.write(new Date().getFullYear())</script> State of California</p>

			<?php if ( $cagov_design_system_is_caweb_plugin_active ) : ?>
			<p>Powered by: CAWeb Publishing Service</p>
			<?php endif; ?>
		</div>
	</div>
	<cagov-back-to-top data-hide-after="7000" data-label="Back to top"></cagov-back-to-top>
</footer>
