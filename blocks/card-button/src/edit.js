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
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#richtext
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#innerblocks
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * This package includes a library of generic WordPress components to be used for creating
 * common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import metadata from './block.json';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	let {
		setAttributes,
		attributes: {
			buttonText,
		},
	} = props;

	const onChangeButtonText = (newButtonText) => {
		console.log('newButtonText: ', newButtonText);

		setAttributes({ buttonText: newButtonText });
	};

	return (
		<button className={'action'}>
			<RichText
				placeholder={__('Call to action', metadata.textdomain)}
				value={buttonText}
				onChange={onChangeButtonText}
			/>
		</button>
	)
}
