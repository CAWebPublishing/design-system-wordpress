/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	let { 
		attributes: {stationId, actDate, pctAvg, pctCap, cap, avg, storage}  
	} = props;

	const blockProps = useBlockProps.save();
	const svgBasinDepth = 135;

	let waterLevelY = Math.round(svgBasinDepth - (svgBasinDepth * pctCap / 100));
	let historicalLineY = Math.round(svgBasinDepth - (svgBasinDepth * pctAvg / 100));
	
	// let currentStorage = Number.isInteger(storage) ? (storage).toLocaleString("en-US") : "";
	let currentStorage = undefined != storage ? (storage).toLocaleString("en-US") : storage;
	let historyAverage = Number.isInteger(avg) ? (avg).toLocaleString("en-US") : "";
	let maxCapacity = Number.isInteger(cap) ? (cap).toLocaleString("en-US") : "";

	// data-historical-taf={historyAverage} data-capacity-taf={maxCapacity} data-current-taf={currentStorage}

	return (
		<div {...blockProps}>
		<drought-reservoir-levels data-locale="en-US">
		{
			undefined != stationId && "" != stationId  ?
				<div class="reservoir-data-viz">
					<div class="reservoir-data-viz-overall">
						<div class="sr-only">
							<h5 class="summary-header">Summary of current level</h5>
						</div>
						<p class="current-level summary-stat">
							<span class="data-viz-pct">{pctAvg}%</span>
							<span style={{'display': 'block'}}>of average levels</span>
						</p>
					</div>
					<div class="reservoir-data-viz-graphic popover-container">
						<svg width="150" height="150" viewBox="0 0 150 150" aria-hidden="true">
							<defs>
								<clipPath id="rounded-water-bottom">
								<rect x="30" y="-15" width="90" height="150" rx="15" ry="15"></rect>
								</clipPath>
							</defs>
							<path id="basin-capacity" d="M0,150 L15,0 h10 v125 a15,15 0 0 0 15,15 h70 a15,15 0 0 0 15,-15 v-125 h10 L150,150 z" class=""></path>
							<rect id="basin-water" x="30" y={ Number.isInteger(waterLevelY) ? waterLevelY : 0 } width="90" height={ Number.isInteger(waterLevelY) ? 61 : 0 } clip-path="url(#rounded-water-bottom)"></rect>
							<line id="historical-line" x1="0" y1={ Number.isInteger(historicalLineY) ? historicalLineY : 0 } x2="150" y2={ Number.isInteger(historicalLineY) ? historicalLineY : 0 } stroke-width="3" stroke-dasharray="3 6" stroke-linecap="round"></line>
						    <rect id="historical-line-hover-target" x="0" y={ Number.isInteger(historicalLineY) ? historicalLineY - 5 : -5 } width="150" height="10"></rect>
						</svg>
					</div>
				</div>
					: ''
				}
		</drought-reservoir-levels>
		</div>
	);
}
