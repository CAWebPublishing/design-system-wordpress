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

?>
<!-- Singlelevel navigation -->
<cagov-site-navigation>
	<div>
		<nav class="expanded-menu" role="navigation" aria-label="Site Navigation" aria-hidden="false" id="main-menu">
			<div class="expanded-menu-grid">
				<div class="expanded-menu-section mobile-only">
					<strong class="expanded-menu-section-header">
						<a class="expanded-menu-section-header-link js-event-hm-menu" href="/">Home</a>
					</strong>
				</div>

				<?php
				foreach ( $cagov_design_system_menu_items as $cagov_design_system_item ) {

					// If a top level nav item, menu_item_parent = 0.
					if ( ! $cagov_design_system_item->menu_item_parent ) {
						$cagov_design_system_item_meta = get_post_meta( $cagov_design_system_item->ID );
						?>
							<div class="expanded-menu-col js-cagov-navoverlay-expandable">
								<div class="expanded-menu-section">
									<a 
										class="expanded-menu-section-header-link js-event-hm-menu" 
										href="<?php print esc_url( $cagov_design_system_item->url ); ?>" 
										tabindex="-1"
									<?php if ( ! empty( $cagov_design_system_item->target ) ) : ?>
										target="<?php print esc_attr( $cagov_design_system_item->target ); ?>" 
										<?php endif; ?>
									<?php if ( ! empty( $cagov_design_system_item->xfn ) ) : ?>
										rel="<?php print esc_attr( $cagov_design_system_item->xfn ); ?>"
										<?php endif; ?>
									><?php print esc_html( $cagov_design_system_item->title ); ?></a>
								</div>
							</div>
							<?php
					}
				}


				?>
			</div>
		</nav>
	</div>
</cagov-site-navigation>
