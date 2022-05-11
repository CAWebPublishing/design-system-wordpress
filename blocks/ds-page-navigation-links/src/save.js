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
	const blockProps = useBlockProps.save();
	const {
		attributes: {  
			linkText,
			linkInfo
		 },
	} = props;
	
	let linkAnchor = '#';
	let linkTarget = '_self';
	
	if( undefined !== linkInfo ){
		if( undefined !== linkInfo.linkTarget && true === linkInfo.linkTarget ){
			linkTarget = '_blank';
		}

		if(undefined !== linkInfo.url){
			linkAnchor = linkInfo.url;
		}
	}

	return (
		<li {...blockProps}>
			<a href={linkAnchor} target={linkTarget} rel={ '_self' === linkTarget ? 'noopener' : ''}><span>{linkText}</span></a>
		</li>
	);
}
