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
import { useBlockProps, RichText, MediaUpload, InnerBlocks} from '@wordpress/block-editor';

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
import { Button } from '@wordpress/components';


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
		attributes: {
			title,
			mediaID,
			mediaURL,
			mediaAlt,
			mediaWidth,
			mediaHeight,
		},
	} = props;

	const blockProps = useBlockProps();


	const ALLOWED_BLOCKS = ['core/button', 'core/paragraph'];
 	
	 const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: newTitle } );
	};
	
	const onSelectImage = function (media) {
		 return setAttributes({
			 mediaURL: media.url,
			 mediaID: media.id,
			 mediaAlt: media.alt,
			 mediaWidth: media.width,
			 mediaHeight: media.height,
		 });
	 };
 
	 return (
		 <div {...blockProps}>
			<div className="cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block">
				<div>
					<div className="cagov-stack cagov-p-2 cagov-featured-sidebar">
						<RichText
							tagName="h1"
							placeholder={__('Write title…', 'cagov-design-system')}
							value={title}
							onChange={onChangeTitle}
						/>
	
						<div className="cagov-feature-card-body-content">
							<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
						</div>
					</div>
				
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={mediaID}
						labels={{
							title: __('Feature Card Image'),
						}}
						render={({open}) => {
							return (
								<div>
									{mediaID && (
										<img
											className="cagov-featured-image"
											src={mediaURL}
											alt={mediaAlt}
											width={mediaWidth}
											height={mediaHeight}
										/>
										)
									}
									<Button
										variant="primary"
										onClick={open}
									>
										{	__('Change image', 'cagov-design-system') }
									</Button>
								</div>
							);
						}}
					/>
					
				</div>
			</div>
		 </div>
	 );
}
