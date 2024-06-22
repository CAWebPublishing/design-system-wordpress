<?php
/**
 * Design System Alert Banners
 *
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'init', 'cagov_design_system_alert_cookies' );


/**
 * Set Cookies for Alert Banners.
 *
 * @return void
 */
function cagov_design_system_alert_cookies() {

	if ( ! headers_sent() ) {
		$alerts = get_option( 'caweb_alerts', array() );

		if ( ! empty( $alerts ) ) {
			foreach ( $alerts as $a => $alert ) {
				$status = $alert['status'];
				$cookie = isset( $_COOKIE[ "cagov-alert-$a" ] ) ? sanitize_text_field( wp_unslash( $_COOKIE[ "cagov-alert-$a" ] ) ) : true;

				if ( 'on' !== $status ) {
					$cookie = false;
				}

				setcookie( "cagov-alert-$a", $cookie, 0, '/' );

			}
		}
	}
}

/**
 * Renders Alert Banners
 *
 * @return void
 */
function cagov_design_system_render_alerts() {
	$alerts = get_option( 'caweb_alerts', array() );

	if ( empty( $alerts ) ) {
		return;
	}

	?>
	<div id="cagov-alerts">
	<?php
	foreach ( $alerts as $a => $alert ) {
		$cookie  = isset( $_COOKIE[ "cagov-alert-$a" ] ) ? sanitize_text_field( wp_unslash( $_COOKIE[ "cagov-alert-$a" ] ) ) : true;
		$display = $alert['page_display'];
		$status  = $alert['status'];

		if ( $cookie !== 'false' && 'on' === $status &&
			(
				( is_front_page() && 'home' === $display ) ||
				( 'all' === $display )
			)
		) {
			$header = wp_unslash( $alert['header'] );
			$icon   = $alert['icon'];
			$color  = $alert['color'];
			$button = $alert['button'];
			$url    = $alert['url'];
			$text   = wp_unslash( $alert['text'] );
			$target = $alert['target'];
			$msg    = $alert['message'];

			?>
			<div  id="cagov-alert-<?php print esc_attr( $a ); ?>" style="background-color: <?php print esc_attr( $color ); ?>" class="alert alert-dismissible alert-banner alert-<?php print esc_attr( $a ); ?>">
				<div>
					<?php if ( ! empty( $button ) && ! empty( $url ) ) : ?>
					<a href="<?php print esc_url( $url ); ?>" target="<?php print empty( $target ) ? '_self' : '_blank'; ?>" class="alert-link"><?php print esc_html( $text ); ?></a>
					<?php endif; ?>

					<?php if ( ! empty( $header ) ) : ?>
						<span class="alert-level">
							<?php print esc_html( $header ); ?>
						</span>
					<?php endif; ?>

					<?php
					if ( ! empty( $msg ) ) {
						print wp_kses( $msg, 'post' );
					}
					?>

					<button data-alert="<?php print esc_attr( $a ); ?>" class="ca-gov-close-icon close" aria-label="Close Alert <?php print esc_attr( $a ); ?>"></button>

				</div>
			</div>
			<?php
		}
	}
	?>
	</div>
	<?php
}
?>
