<?php
/**
 * Drought Map Dynamic Renderer Functions
 *
 * @package caweb
 */

if ( ! function_exists('caweb_drought_map_block_renderer') ){
	/**
	* Dynamic Renderer for Drought Map Block
	*
	* @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
	*
	* @param array         $attributes Block attributes.
	* @param string        $content    Block content.
	* @param  WP_Block_Type $block Current Block Type.
	* @return string Rendered block type output.
	*/
	function caweb_drought_map_block_renderer( $attributes, $content, $block ) {
		/**
		 * Declare variable variables out of the attributes
		 *@see https://www.php.net/manual/en/language.variables.variable.php
		*/
		foreach ( $attributes as $attr => $val ) {
			$$attr = $val;
		}

		$current_date = new DateTime();

		// get current day
		$current_day = $current_date->format('w') + 1;
		
		// data is updated on tuesday, 
		// subtract 3 from the current day to get how many days ago that was.
		$days_ago = $current_day - 3;
		// if current day is before thursday (5) add 7 to get last tuesdays data.
		$days_ago += 5 >= $current_day ? 7 : 0;
		
		$current_date->modify(sprintf('-%1$ddays', $days_ago));
		
		$output = sprintf('
		<div class="cagov-drought-map">
			<div class="drought-map-container">
				<div class="drought-map-image">
						<div class="drought-map-legend">
							%1$s
						</div>
						<img src="https://droughtmonitor.unl.edu/data/svg/%2$s/%2$s_ca_none.svg" />
				</div>
				<div class="map-link"><a target="_blank" href="https://droughtmonitor.unl.edu/CurrentMap/StateDroughtMonitor.aspx?CA">View details on US Drought Monitor</a></div>
			</div>
		</div>',
		caweb_drought_map_spei(),
		$current_date->format('Ymd'),
	);

		return $output;
	}
}

function caweb_drought_map_spei(){
	return '<svg width="200" height="252" viewBox="0 0 200 252" aria-hidden="true"><style>text {
		font-size: .9rem;
	}
	text.bold {
		font-weight: 700;
	}</style><text x="0" y="0" text-anchor="start" dominant-baseline="hanging" class="bold">12 month SPEI</text><text x="50" y="52" dominant-baseline="middle" text-anchor="start">Extremely wet</text><text x="50" y="82" dominant-baseline="middle" text-anchor="start">Severely wet</text><text x="50" y="102" dominant-baseline="middle" text-anchor="start">Moderately wet</text><text x="50" y="142" dominant-baseline="middle" text-anchor="start">Near normal</text><text x="50" y="182" dominant-baseline="middle" text-anchor="start">Moderate drought</text><text x="50" y="202" dominant-baseline="middle" text-anchor="start">Severe drought</text><text x="50" y="232" dominant-baseline="middle" text-anchor="start">Extreme drought</text><g stroke="#898891" stroke-width="1"><rect x="1" y="31" width="28" height="20" fill="#260072"></rect><rect x="1" y="51" width="28" height="20" fill="#3C00FE"></rect><line x1="40" y1="33" x2="40" y2="69"></line><rect x="1" y="71" width="28" height="20" fill="#01B9FF"></rect><line x1="40" y1="73" x2="40" y2="89"></line><rect x="1" y="91" width="28" height="20" fill="#6EFFD8"></rect><line x1="40" y1="93" x2="40" y2="109"></line><rect x="1" y="111" width="28" height="20" fill="#00FF19"></rect><rect x="1" y="131" width="28" height="20" fill="#FFFFFF"></rect><rect x="1" y="151" width="28" height="20" fill="#DEFF00"></rect><line x1="40" y1="113" x2="40" y2="169"></line><rect x="1" y="171" width="28" height="20" fill="#FCD800"></rect><line x1="40" y1="173" x2="40" y2="189"></line><rect x="1" y="191" width="28" height="20" fill="#FF8601"></rect><line x1="40" y1="193" x2="40" y2="209"></line><rect x="1" y="211" width="28" height="20" fill="#FE0000"></rect><rect x="1" y="231" width="28" height="20" fill="#B40001"></rect><line x1="40" y1="213" x2="40" y2="249"></line></g></svg>';
}