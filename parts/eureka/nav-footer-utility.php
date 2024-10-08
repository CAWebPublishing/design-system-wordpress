<?php
/**
 * Design System Footer Navigation Menu
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

$cagov_open_nav = false;

foreach ( $cagov_design_system_menu_items as $i => $cagov_design_system_item ) {

	// If a top level nav item, menu_item_parent = 0.
	if ( ! $cagov_design_system_item->menu_item_parent ) {
		
		if( $cagov_open_nav ):
		?>
			</ul>
		</nav>
		<?php
		endif;
		$cagov_open_nav = true;
	?>
		<nav role="navigation" aria-labelledby="nav-utility-link-<?php print esc_attr( $i ); ?>">
			<h3 id="nav-utility-link-<?php print esc_attr( $i ); ?>"><?php print esc_html( $cagov_design_system_item->title ); ?></h3>
			<ul>
	<?php
	}else{
		?>
			<li>
			<a 
				href="<?php print esc_url( $cagov_design_system_item->url ); ?>" 
				<?php if ( ! empty( $cagov_design_system_item->target ) ) : ?>
				target="<?php print esc_attr( $cagov_design_system_item->target ); ?>" 
				<?php endif; ?>
				<?php if ( ! empty( $cagov_design_system_item->xfn ) ) : ?>
				rel="<?php print esc_attr( $cagov_design_system_item->xfn ); ?>"
				<?php endif; ?>
				><?php print esc_html( $cagov_design_system_item->title ); ?></a>
			</li>
		<?php
	}
}
