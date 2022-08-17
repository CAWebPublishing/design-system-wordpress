<?php



/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_accordion_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$output = sprintf(
		'
        <div>
            <cagov-accordion>
                <details>
                    <summary>%1$s</summary>
                    <div class="accordion-body">
                    %2$s
                    </div>
                </details>
            </cagov-accordion>
        </div>
        ',
		$title,
		$content
	);

	return $output;
}


/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_feature_card_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$img = '';

	if ( isset( $mediaID ) && ! empty( $mediaID ) ) {
		$alt = isset( $mediaID ) && ! empty( $mediaID ) ? sprintf( ' alt="%1$s"', $mediaAlt ) : '';
		$img = sprintf( '<div><img class="cagov-featured-image" src="%1$s"%2$s/></div>', $mediaURL, $alt );
	}

	$output = sprintf(
		'
    <div>
        <div class="cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block">
            <div>
                <div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
                    <h1>%1$s</h1>
                    <div class="cagov-feature-card-body-content">%2$s</div>
                </div>
                <div>%3$s</div>
            </div>
        </div>
    </div>
    ',
		$title,
		$content,
		$img
	);

	return $output;

}


/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_link_grid_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$output = sprintf(
		'
    <div>
        <div class="cagov-grid">
        %1$s
        </div>
    </div>
    ',
		$content
	);

	return $output;

}

/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_link_grid_card_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$is_link = isset( $linkInfo ) && ! empty( $linkInfo );

	$href   = $is_link && isset( $linkInfo['url'] ) && ! empty( $linkInfo['url'] ) ? $linkInfo['url'] : '#';
	$target = $is_link && isset( $linkInfo['linkTarget'] ) && ! empty( $linkInfo['linkTarget'] ) && $linkInfo['linkTarget'] ? '_blank' : '_self';
	$rel    = '_self' === $target ? ' rel="noopener"' : '';

	$output = sprintf(
		'
    <div>
        <a class="no-deco cagov-card" href="%1$s" target="%2$s"%3$s>
            <span class="card-text">%4$s</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                >
                <g>
                    <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                    <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                </g>
            </svg>
        </a>
    </div>
    ',
		$href,
		$target,
		$rel,
		$linkText
	);

	return $output;
}

/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_page_alert_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$output = sprintf(
		'
    <div>
		<cagov-page-alert
			data-icon="ca-gov-icon-%1$s"
			data-message="%2$s"
			></cagov-page-alert>
	</div>',
		$icon,
		$message
	);

	return $output;
}

/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_page_navigation_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$output = sprintf(
		'
    <div>
        <sidebar>
            <cagov-page-navigation>
                <nav aria-labelledby="page-navigation-label">
                    <div class="label">%1$s</div>
                    <ul>
                    %2$s
                    </ul>
                </nav>
            </cagov-page-navigation>
        </sidebar>
    </div>
    ',
		$title,
		$content
	);

	return $output;

}

/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_page_navigation_links_render( $attributes, $content, $block ) {
	foreach ( $attributes as $attr => $val ) {
		$$attr = $val;
	}

	$is_link = isset( $linkInfo ) && ! empty( $linkInfo );

	$href   = $is_link && isset( $linkInfo['url'] ) && ! empty( $linkInfo['url'] ) ? $linkInfo['url'] : '#';
	$target = $is_link && isset( $linkInfo['linkTarget'] ) && ! empty( $linkInfo['linkTarget'] ) && $linkInfo['linkTarget'] ? '_blank' : '_self';
	$rel    = '_self' === $target ? ' rel="noopener"' : '';

	$output = sprintf(
		'
    <li>
        <a href="%1$s" target="%2$s"%3$s>
            <span>%4$s</span>
        </a>
    </li>',
		$href,
		$target,
		$rel,
		$linkText
	);

	return $output;

}

/**
 * Dynamic Renderer for CAGov Design System Blocks
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 *
 * @param array         $attributes Block attributes.
 * @param string        $content    Block content.
 * @param  WP_Block_Type $block Current Block Type.
 * @return string Rendered block type output.
 */
function cagov_ds_reservoir_levels_render( $attributes, $content, $block ) {

	if ( empty( $attributes['stationId'] ) ) {
		return;
	}

	$result = cagov_ds_cdec_reservoir_conditions_api( $attributes['stationId'] );

	foreach ( $result as $attr => $val ) {
		$$attr = $val;
	}

	$svgBasinDepth = 135;

	$waterLevel = round( $svgBasinDepth - ( $svgBasinDepth * $pctCap / 100 ) );

	$waterLevelY      = is_numeric( $waterLevel ) ? $waterLevel : 0;
	$waterLevelHeight = is_numeric( $waterLevel ) ? 61 : 0;

	$historicalLineY = round( $svgBasinDepth - ( $svgBasinDepth * $pctAvg / 100 ) );
	$historicalLineY = is_numeric( $historicalLineY ) ? $historicalLineY : 0;

	$historicalLineHoverY = $historicalLineY - 5;

	$unique = uniqid( '' );

	$capacity_popover = sprintf(
		'
    <div tabindex="0" id="basin-capacity-%1$s-popover" class="popover-content" style="--x:94.66666666666667%%; --y:50%%; --x-offset-m:65%%;">
      <div class="popover-legend">
        <svg width="13" height="13" viewBox="0 0 10 10" aria-hidden="true">
          <rect x="0" y="0" width="10" height="10" class="capacity"></rect>
        </svg>
        <h5 class="capacity-header">Total capacity</h5>
      </div>
      <p class="current-stat">%2$s millions of acre feet (MAF)</p>
    </div>',
		$unique,
		$cap
	);

	$storage_popover = sprintf(
		'
    <div tabindex="0" id="basin-water-%1$s-popover" class="popover-content" style="--x:81.33333333333333%%; --y:70%%; --x-offset-m:65%%;">
      <div class="popover-legend">
        <svg width="13" height="13" viewBox="0 0 10 10" aria-hidden="true">
          <rect x="0" y="0" width="10" height="10" class="filled"></rect>
        </svg>
        <h5 class="current-header">Current level</h5>
      </div>
      <p class="current-stat">%2$s millions of acre feet (MAF)</p>
    </div>',
		$unique,
		$storage
	);

	$average_popover = sprintf(
		'
    <div tabindex="0" id="historical-line-hover-target-%1$s-popover" class="popover-content" style="--x:94.66666666666667%%; --y:28%%; --x-offset-m:65%%;">
        <div class="popover-legend">
            <svg width="26" height="13" viewBox="0 0 26 13" aria-hidden="true">
            <line x1="0" y1="7" x2="26" y2="7" stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round" class="historical"></line>
            </svg>
            <h5 class="historical-header">Average level historically</h5>
        </div>
      <p class="historical-stat">%2$s millions of acre feet (MAF)</p>
    </div>',
		$unique,
		$avg
	);

	$output = sprintf(
		'
    <div>
        <drought-reservoir-levels data-locale="en-US">
            <div class="reservoir-data-viz">
			    <div class="reservoir-data-viz-overall">
					<div class="sr-only">
						<h5 class="summary-header">Summary of current level</h5>
					</div>
					<p class="current-level summary-stat">
						<span class="data-viz-pct">%1$s%%</span>
						<span style="display: block;">of average levels</span>
					</p>
				</div>
                <div class="reservoir-data-viz-graphic popover-container">
					<svg width="150" height="150" viewBox="0 0 150 150" aria-hidden="true">
						<defs>
							<clipPath id="rounded-water-bottom">
			    				<rect x="30" y="-15" width="90" height="150" rx="15" ry="15"></rect>
							</clipPath>
						</defs>
						<path id="basin-capacity-%2$s" d="M0,150 L15,0 h10 v125 a15,15 0 0 0 15,15 h70 a15,15 0 0 0 15,-15 v-125 h10 L150,150 z" class="popover basin-capacity"></path>
						<rect id="basin-water-%2$s" x="30" y="%3$s"  width="90" height="%4$s" clip-path="url(#rounded-water-bottom)" class="popover basin-water"></rect>
						<line class="historical-line" x1="0" y1="%5$s" x2="150" y2="%5$s" stroke-width="3" stroke-dasharray="3 6" stroke-linecap="round"></line>
					    <rect id="historical-line-hover-target-%2$s" x="0" y="%6$s" width="150" height="10" class="popover historical-line-hover-target"></rect>
					</svg>
                    %7$s
                    %8$s
                    %9$s
				</div>
            </div>
        </drought-reservoir-levels>
    </div>',
		absint( $pctAvg ),
		$unique,
		$waterLevelY,
		$waterLevelHeight,
		$historicalLineY,
		$historicalLineHoverY,
		$capacity_popover,
		$storage_popover,
		$average_popover
	);

	return $output;

}
