/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * This package includes a library of generic WordPress components to be used for creating 
 * common UI elements shared between screens and features of the WordPress dashboard.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { SelectControl } from '@wordpress/components';

/**
 * Retrieve data from the CDEC Reservoir API
 *
 * @see https://cdec.water.ca.gov/resapp/service/res/conditions
*/
import { stationIds } from './stationIds';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	let {
		setAttributes,
		attributes: {stationId, actDate, pctAvg, pctCap, cap, avg, storage}  
	} = props;

	const blockProps = useBlockProps();

	const svgBasinDepth = 135;

	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; 
	let yyyy = today.getFullYear();

	if( dd < 10 ){
		dd = '0' + dd;
	}

	if( mm < 10 ){
		mm = '0' + mm;
	}

	today = yyyy + '-' + mm + '-' + dd;

	async function getConditions(station){
		let url = 'https://cdec.water.ca.gov/resapp/service/res/conditions?date=' + today + '&stationIds=' + station;
		
		const response = await fetch(url)
		.then(
            (response) => {
				return response.json();
            }
        );
		setAttributes( { actDate: response[0].actDate} );
		setAttributes( { pctAvg: parseInt( response[0].pctAvg ) } );
		setAttributes( { pctCap: parseInt( response[0].pctCap ) } );
		setAttributes( { cap: parseInt( response[0].cap ) } );
		setAttributes( { avg: parseInt( response[0].avg ) } );
		setAttributes( { storage: parseInt( response[0].storage ) } );
	}

	let waterLevelY = Math.round(svgBasinDepth - (svgBasinDepth * pctCap / 100));
	let historicalLineY = Math.round(svgBasinDepth - (svgBasinDepth * pctAvg / 100));

	// let currentStorage = Number.isInteger(storage) ? (storage).toLocaleString("en-US") : "";
	let currentStorage = undefined != storage ? (storage).toLocaleString("en-US") : storage;
	let historyAverage = Number.isInteger(avg) ? (avg).toLocaleString("en-US") : "";
	let maxCapacity = Number.isInteger(cap) ? (cap).toLocaleString("en-US") : "";

	const onChange = (newId) => {
		setAttributes( { stationId: newId} );

		getConditions(newId);

	}

	return (
		<div {...blockProps}>
			<SelectControl
				label="Select a Station"
				value={ stationId }
				options={ stationIds }
				onChange={ onChange }
				className="cdec-station-ids"
				__nextHasNoMarginBottom
			/>
			<drought-reservoir-levels data-locale="en-US">
				{
					undefined != stationId && "" != stationId ?
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
							<path class="basin-capacity" d="M0,150 L15,0 h10 v125 a15,15 0 0 0 15,15 h70 a15,15 0 0 0 15,-15 v-125 h10 L150,150 z"></path>
							<rect class="basin-water" x="30" y={ Number.isInteger(waterLevelY) ? waterLevelY : 0 } width="90" height={ Number.isInteger(waterLevelY) ? 61 : 0 } clip-path="url(#rounded-water-bottom)"></rect>
							<line class="historical-line" x1="0" y1={ Number.isInteger(historicalLineY) ? historicalLineY : 0 } x2="150" y2={ Number.isInteger(historicalLineY) ? historicalLineY : 0 } stroke-width="3" stroke-dasharray="3 6" stroke-linecap="round"></line>
						    <rect class="historical-line-hover-target" x="0" y={ Number.isInteger(historicalLineY) ? historicalLineY - 5 : -5 } width="150" height="10"></rect>
						</svg>
					</div>
				</div>
					: ''
				}
			</drought-reservoir-levels>
		</div>
	);
}
