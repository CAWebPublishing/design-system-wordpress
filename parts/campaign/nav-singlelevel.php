<?php
/**
 * Design System Singlelevel Navigation Menu
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-includes/class-walker-nav-menu.php
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// phpcs:disable
foreach ( $args as $var => $val ) {
	$$var = $val;
}
// phpcs:enable

$cagov_design_system_menu_items = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );

_wp_menu_item_classes_by_context( $cagov_design_system_menu_items );

/* Search */
$cagov_design_system_google_search_id = get_option( 'ca_google_search_id', '' );
$cagov_design_system_keyword      = isset( $_GET['q'] ) ? sanitize_text_field( wp_unslash( $_GET['q'] ) ) : '';

/* Translate */
$cagov_design_system_google_trans_enabled = get_option( 'ca_google_trans_enabled', false );
$cagov_design_system_google_trans_page = get_option( 'ca_google_trans_page', '' );
$cagov_design_system_google_trans_text = get_option( 'ca_google_trans_text', '' );
$cagov_design_system_google_trans_page_new_window = get_option( 'ca_google_trans_page_new_window', '' );
$cagov_design_system_google_trans_icon = get_option( 'ca_google_trans_icon', '' );

?>
<!-- Singlelevel navigation -->
<nav>
  <ul class="navlinks">
  <?php
		foreach ( $cagov_design_system_menu_items as $cagov_design_system_item ) {

			// If a top level nav item, menu_item_parent = 0.
			if ( ! $cagov_design_system_item->menu_item_parent ) {
				$cagov_design_system_item_meta = get_post_meta( $cagov_design_system_item->ID );
			?>
				<li>
					<a 
						href="<?php print esc_url( $cagov_design_system_item->url ); ?>" 
					<?php if ( ! empty( $cagov_design_system_item->target ) ) : ?>
						target="<?php print esc_attr( $cagov_design_system_item->target ); ?>" 
					<?php endif; ?>
					<?php if( in_array( 'current-menu-item', $cagov_design_system_item->classes, true ) ) : ?>
						class="active"
					<?php endif; ?>
					<?php if ( ! empty( $cagov_design_system_item->xfn ) ) : ?>
						rel="<?php print esc_attr( $cagov_design_system_item->xfn ); ?>"
					<?php endif; ?>
					><?php print esc_html( $cagov_design_system_item->title ); ?></a>
				</li>		
			<?php
			}
		}
		?>
		<li class="search">
			<!-- Search -->
			<form class="search-container"  id="search-form" autocomplete="off" action="<?php print esc_url( site_url( 'serp' ) ); ?>">
				<input id="search-box" type="text" class="search-box" name="q" value="<?php print esc_attr( $cagov_design_system_keyword ); ?>">
				<label for="search-box" class="search-svg">
					<span class="sr-only">Search</span>
				</label>
				<input type="submit" id="search-submit">
			</form>
		</li>

		<?php if ( 'custom' === $cagov_design_system_google_trans_enabled && ! empty( $cagov_design_system_google_trans_page ) ) : ?>
		<li class="google-translate">
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
		</li>
		<?php endif; ?>

		<?php if ( true === $cagov_design_system_google_trans_enabled || 'standard' === $cagov_design_system_google_trans_enabled ) : ?>
		<li class="google-translate">
			<div class="standard-translate" id="google_translate_element"></div>
		</li>
		<?php endif; ?>
  </ul>
</nav>