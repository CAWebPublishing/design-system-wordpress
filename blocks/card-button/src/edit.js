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
import { CustomLink, useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

/**
 * This package includes a library of generic WordPress components to be used for creating
 * common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { PanelBody, SelectControl, TextControl, ToggleControl, Toolbar, ToolbarButton } from '@wordpress/components';
import { formatBold, formatItalic, link } from '@wordpress/icons';

import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';


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
	const [isExternalUrl, setIsExternalUrl] = useState(false);

	const checkDestinationUrl = (url) => {

		// Define the prefixes to remove
		const httpsWwwPrefix = 'https://www.';
		const wwwPrefix = 'www.';
		let urlToUse;

		// Remove 'https://www.' if it exists
		if (url.startsWith(httpsWwwPrefix)) {
			urlToUse = url.slice(httpsWwwPrefix.length);
			// Remove 'www.' if it exists
		} else if (url.startsWith(wwwPrefix)) {
			urlToUse = url.slice(wwwPrefix.length);
		} else {
			urlToUse = url;
		}

		props.setAttributes({
			externalUrl: urlToUse,
			visibleUrl: url
		});
	}

	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1
		});
		return data?.filter(item => item.visibility.show_in_nav_menus && item.visibility.show_ui);
	})
	const posts = useSelect((select) => {
		const data = select("core").getEntityRecords("postType", props.attributes.postType, {
			per_page: -1
		});
		return data;
	}, [props.attributes.postType]);
	const blockProps = useBlockProps();
	return (
		<>
			<InspectorControls>
				<PanelBody title={'Destination'}>
					<ToggleControl
						label={'External link'}
						checked={isExternalUrl}
						onChange={newState => setIsExternalUrl(newState)}
					/>
					{isExternalUrl &&
						<TextControl
							label={'Destination URL'}
							value={props.attributes.visibleUrl}
							onChange={(newUrl) => checkDestinationUrl(newUrl)}
						/>
					}
					{!isExternalUrl &&
						<SelectControl
							label={'Type'}
							value={props.attributes.postType}
							onChange={(newValue) => {
								props.setAttributes({
									postType: newValue
								});
							}}
							options={[{
								label: "Select a post type...",
								value: ""
							}, ...(postTypes || []).map(postType => ({
								label: postType.labels.singular_name,
								value: postType.slug
							}))]} />
					}
					{!!props.attributes.postType &&
						!isExternalUrl &&
						<SelectControl
							label={`Linked ${props.attributes.postType}`}
							value={props.attributes.linkedPost}
							onChange={(newValue) => {
								props.setAttributes({
									linkedPost: newValue ? parseInt(newValue) : null
								});
							}}
							options={[{
								label: `Select a ${props.attributes.postType} to link to`,
								value: ""
							}, ...(posts || []).map(post => ({
								label: post.title.rendered,
								value: post.id
							}))]} />
					}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					className={'action'}
					placeholder={"Label text"}
					value={props.attributes.labelText}
					allowedFormats={[]}
					multiline={false}
					onSplit={() => { }}
					onReplace={() => { }}
					onChange={(newValue) => {
						props.setAttributes({
							labelText: newValue
						})
					}}
				/>
			</div>
		</>
	)
}
