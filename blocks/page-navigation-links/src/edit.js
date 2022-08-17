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
import { useBlockProps, RichText, BlockControls, URLPopover, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

/**
 * Add additional WordPress React Components
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
 import { Toolbar, ToolbarGroup, ToolbarButton  } from '@wordpress/components';

/**
 * @see https://wp-icon.wild-works.net/ for list of icons
 */
import { link } from '@wordpress/icons';

import { useState } from '@wordpress/element';

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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	let { 
		setAttributes,
		attributes: {
			linkText,
		   	linkInfo
	   }, 
   } = props;

	const blockProps = useBlockProps();

	const [ isVisible, setIsVisible ] = useState( false );
   
	const toggleVisible = () => {
		setIsVisible( ( state ) => ! state );
	};

	const onChangeText = ( newLinkText ) => {
		setAttributes( { linkText: newLinkText } );
	};

	const onChangeLink = ( newLink ) => {
		 setAttributes( { linkInfo: newLink } );
	 };
	 
	const onRemoveLink = () => {
		setAttributes( { linkInfo: '' } );
	};


	return (
		<li {...blockProps}>
			<BlockControls>
				<Toolbar>	
					<ToolbarGroup>
						<ToolbarButton 
							icon={ link } 
							onClick={ toggleVisible }
						>
						{
							isVisible &&
							<URLPopover>
							<LinkControl
								value={ linkInfo }
								onChange={ onChangeLink }
								onRemove={onRemoveLink}
								settings={[
									{
										id: 'linkTarget',
										title: 'Open in New Tab?',
									}
								]}
								withCreateSuggestion={false}
								allowDirectEntry={true}
								withURLSuggestion={false}
							>
							</LinkControl>
							</URLPopover>
						}
						</ToolbarButton >
					</ToolbarGroup>
				</Toolbar>	
			</BlockControls>
			<a>
				<RichText 
					tagName="span"
					multiline="false"
					value={linkText}
					allowedFormats={[]}
					onChange={onChangeText}
					placeholder={__("Navigation Link", 'cagov-design-system')}
				/>
			</a>
		</li>
	);
}
