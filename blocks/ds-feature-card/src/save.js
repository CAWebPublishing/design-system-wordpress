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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
			title,
			mediaURL,
			mediaAlt,
			mediaWidth,
			mediaHeight,
		 },
	} = props;

	return (
		<div {...blockProps}>
			<div class="cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block">
				<div>
					<div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
						<h1>{title}</h1>
	
						<div class="cagov-feature-card-body-content">
							<InnerBlocks.Content />
						</div>
					</div>
					<div>
					<img
						class="cagov-featured-image"
						src={mediaURL}
						alt={mediaAlt}
						width={mediaWidth}
						height={mediaHeight}
						/>
					</div>
				</div>
			</div>
		 </div>
	);
}
