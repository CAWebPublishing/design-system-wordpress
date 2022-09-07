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
		attributes: {},
	} = props;

	const blockProps = useBlockProps();

	const formatDate = (dateObj, format = false) => {

		let dd = dateObj.getDate();
		let mm = dateObj.getMonth()+1; 
		let yyyy = dateObj.getFullYear();
	
		if( dd < 10 ){
			dd = '0' + dd;
		}
	
		if( mm < 10 ){
			mm = '0' + mm;
		}

		if( format ){
			return `${mm}/${dd}/${yyyy}`
		}else{
			return `${yyyy}${mm}${dd}`;
		}

	}

	let current_date = new Date();

	// get current day
	let current_day = current_date.getUTCDay() + 1;
	
	// data is updated on tuesday, 
	// subtract 3 from the current day to get how many days ago that was.
	let days_ago = current_day - 3;
	// if current day is before thursday (5) add 7 to get last tuesdays data.
	days_ago += 5 >= current_day ? 7 : 0;
			
	current_date.setDate(current_date.getDate() - days_ago);

	let img_date = formatDate(current_date);

	current_date.setDate(current_date.getDate() + 2 );

	let update_date = formatDate(current_date, true);

	return (
	<div class="cagov-drought-map">
		<p class="map-label">Released { update_date }. Updates automatically each Thursday.</p>
		<div class="drought-map-container">
		<div class="drought-map-image">
				<div class="drought-map-legend">
					<svg width="200" height="252" viewBox="0 0 200 252" aria-hidden="true">
					<text x="0" y="0" text-anchor="start" dominant-baseline="hanging" class="bold">12 month SPEI</text>
					<text x="50" y="52" dominant-baseline="middle" text-anchor="start">Extremely wet</text>
					<text x="50" y="82" dominant-baseline="middle" text-anchor="start">Severely wet</text>
					<text x="50" y="102" dominant-baseline="middle" text-anchor="start">Moderately wet</text>
					<text x="50" y="142" dominant-baseline="middle" text-anchor="start">Near normal</text>
					<text x="50" y="182" dominant-baseline="middle" text-anchor="start">Moderate drought</text>
					<text x="50" y="202" dominant-baseline="middle" text-anchor="start">Severe drought</text>
					<text x="50" y="232" dominant-baseline="middle" text-anchor="start">Extreme drought</text>
					<g stroke="#898891" stroke-width="1">
						<rect x="1" y="31" width="28" height="20" fill="#260072"></rect>
						<rect x="1" y="51" width="28" height="20" fill="#3C00FE"></rect>
						<line x1="40" y1="33" x2="40" y2="69"></line>
						<rect x="1" y="71" width="28" height="20" fill="#01B9FF"></rect>
						<line x1="40" y1="73" x2="40" y2="89"></line>
						<rect x="1" y="91" width="28" height="20" fill="#6EFFD8"></rect>
						<line x1="40" y1="93" x2="40" y2="109"></line>
						<rect x="1" y="111" width="28" height="20" fill="#00FF19"></rect>
						<rect x="1" y="131" width="28" height="20" fill="#FFFFFF"></rect>
						<rect x="1" y="151" width="28" height="20" fill="#DEFF00"></rect>
						<line x1="40" y1="113" x2="40" y2="169"></line>
						<rect x="1" y="171" width="28" height="20" fill="#FCD800"></rect>
						<line x1="40" y1="173" x2="40" y2="189"></line>
						<rect x="1" y="191" width="28" height="20" fill="#FF8601"></rect>
						<line x1="40" y1="193" x2="40" y2="209"></line>
						<rect x="1" y="211" width="28" height="20" fill="#FE0000"></rect>
						<rect x="1" y="231" width="28" height="20" fill="#B40001"></rect>
						<line x1="40" y1="213" x2="40" y2="249"></line>
					</g>
					</svg>
				</div>
				<img src={`https://droughtmonitor.unl.edu/data/svg/${img_date}/${img_date}_ca_none.svg`} />
		</div>
		<div class="map-link"><a target="_blank" href="https://droughtmonitor.unl.edu/CurrentMap/StateDroughtMonitor.aspx?CA">View details on US Drought Monitor</a></div>
		</div>
	</div>
	);
}
