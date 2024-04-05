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
<footer>
  <!-- END Embossed CA Bear -->
  <div id="utility-container">
    <div id="utility-footer">
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
    <div id="social-sharing">
		<?php require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/socialshare.php"; ?>
    </div>
  </div>
  <div id="publishing">
  	<?php if ( $cagov_design_system_is_caweb_plugin_active ) : ?>
		<p>Powered by: CAWeb Publishing Service</p>
	<?php endif; ?>
    <p><span aria-hidden="true">&copy;</span> Copyright <script>document.write(new Date().getFullYear())</script></p>
  </div>
</footer>