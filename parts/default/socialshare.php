<?php
/**
 * Design System Social Share
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// social media.
$cagov_design_system_social_media = cagov_design_system_social_media_links();
$cagov_design_system_social_links = '';

if ( ! empty( $cagov_design_system_social_media ) ):
?>
	<div class="footer-social-links">
<?php foreach ( $cagov_design_system_social_media as $cagov_design_system_share => $cagov_design_system_option ) : 
		$cagov_design_system_share_email  = 'ca_social_email' === $cagov_design_system_option ? true : false;
		$cagov_design_system_mail_subject = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
		$cagov_design_system_mail_body    = rawurlencode( get_permalink() );
		$cagov_design_system_mailto       = $cagov_design_system_share_email ? "mailto:?subject=$cagov_design_system_mail_subject&body=$cagov_design_system_mail_body" : '';
		if ( get_option( $cagov_design_system_option . '_footer' ) &&
			( $cagov_design_system_share_email || ! empty( get_option( $cagov_design_system_option, '' ) ) )
		):
			$cagov_design_system_social_url = $cagov_design_system_share_email ? $cagov_design_system_mailto : get_option( $cagov_design_system_option );

			$cagov_design_system_social_default_title = "Share via $cagov_design_system_share";
			$cagov_design_system_social_title         = get_option( "{$cagov_design_system_option}_hover_text", $cagov_design_system_social_default_title );
			$cagov_design_system_icon                 = str_replace( '_', '-', substr( $cagov_design_system_option, 10 ) );
			$cagov_design_system_social_target        = get_option( "{$cagov_design_system_option}_new_window", true ) ? '_blank' : '_self';
?>
			<a 
				class="no-underline font-size-3 p-y-1 m-a-1 m-l-0 m-y-0"
				href="<?php print esc_url( $cagov_design_system_social_url ); ?>" 
				title="<?php print esc_attr( $cagov_design_system_social_title ); ?>"
				target="<?php print esc_attr( $cagov_design_system_social_target ); ?>"
			>
			<?php if ( ! empty( $cagov_design_system_option ) ) : ?>
					<span class="ca-gov-icon-<?php print esc_attr( $cagov_design_system_icon ); ?>"></span>
				<?php endif; ?>
				<span class="sr-only"><?php print esc_attr( $cagov_design_system_share ); ?></span>
			</a>
	<?php endif; ?>
	<?php endforeach; ?>
	</div>
<?php endif; ?>

