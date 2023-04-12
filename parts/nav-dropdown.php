<?php
/**
 * Design System Dropdown Navigation Menu
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
<!-- Dropdown navigation -->
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

						// Get array of Sub Nav Items (second-level-links).
						$cagov_design_system_child_items = cagov_design_system_get_nav_menu_item_children( $cagov_design_system_item->ID, $cagov_design_system_menu_items );

						?>
							<div class="expanded-menu-col js-cagov-navoverlay-expandable">
								<div class="expanded-menu-section">
								<?php if ( empty( $cagov_design_system_child_items ) ) : ?>
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
									<?php else : ?>
										<strong class="expanded-menu-section-header">
											<button class="expanded-menu-section-header-link js-event-hm-menu">
												<span><?php print esc_html( $cagov_design_system_item->title ); ?></span>
												<span class="expanded-menu-section-header-arrow">
													<svg aria-hidden=true width="11" height="7"
														class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" clip-rule="evenodd"
														d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
														/>
													</svg>
												</span>
											</button>
										</strong>
										<div class="expanded-menu-dropdown" aria-hidden="true">
											<?php foreach ( $cagov_design_system_child_items as $cagov_design_system_child_item ) : ?>
												<a 
													class="expanded-menu-dropdown-link js-event-hm-menu" 
													href="<?php print esc_url( $cagov_design_system_child_item->url ); ?>" 
													tabindex="-1"
													<?php if ( ! empty( $cagov_design_system_child_item->target ) ) : ?>
													target="<?php print esc_attr( $cagov_design_system_child_item->target ); ?>" 
													<?php endif; ?>
													<?php if ( ! empty( $cagov_design_system_child_item->xfn ) ) : ?>
													rel="<?php print esc_attr( $cagov_design_system_child_item->xfn ); ?>"
													<?php endif; ?>
											><?php print esc_html( $cagov_design_system_child_item->title ); ?></a>
											<?php endforeach; ?>
										</div>
									<?php endif; ?>
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
