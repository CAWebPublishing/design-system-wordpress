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
		<div {...blockProps}>
			<a href={linkAnchor} target={linkTarget} rel={ '_self' === linkTarget ? 'noopener' : ''} class="no-deco cagov-card">
				<span class="card-text">{linkText}</span>
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
	);
}
