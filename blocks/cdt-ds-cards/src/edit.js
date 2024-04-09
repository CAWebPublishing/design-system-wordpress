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
import { useBlockProps, RichText, InnerBlocks, MediaUpload, InspectorControls } from '@wordpress/block-editor';

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
import { Button, PanelBody, SelectControl, ToggleControl  } from '@wordpress/components';

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
			orientation,
			interactive,
			mediaID,
			mediaURL,
			mediaAlt,
		},
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: newTitle } );
	};

	const onSelectImage = function (media) {
		return setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
			mediaAlt: media.alt
		});
	};

	const onChangeInteractiveField = function ( newValue ) {
		setAttributes( { interactive: newValue } );
	}

	const onChangeOrientationField = function ( newValue ) {
		setAttributes( { orientation: newValue } );
	}

	blockProps.className += " card-text";
	return (
		<>
			<InspectorControls>
				<PanelBody title="Orientation">
					<SelectControl
						label="Select Control"
							value={ orientation }
							options={ [
								{ value: 'top', label: 'Image Top' },
								{ value: 'start', label: 'Image Left' },
								{ value: 'end', label: 'Image Right' },
							] }
						onChange={ onChangeOrientationField }
					/>
					<ToggleControl
						label="Interactive"
						checked={ interactive }
						onChange={ onChangeInteractiveField }
					/>
				</PanelBody>
			</InspectorControls>
			<ul className="cards" data-action={ interactive ? 'interactive' : '' } data-orientation={ 'top' !== orientation ? `media-${orientation}` : ''}>
				<li>
					<div className="card-text" { ...blockProps }>
						<RichText
								tagName="h2"
								placeholder={__('Card title…', 'cagov-design-system')}
								value={title}
								onChange={onChangeTitle}
							/>
						<InnerBlocks allowedBlocks={ ['core/paragraph'] } />
					</div>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={mediaID}
						labels={{
							title: __('Card Image'),
						}}
						render={({open}) => {
							return (
									<>
									<div style={ { margin: 'auto'} }>
										<Button
											variant="primary"
											onClick={open}
										>
											{	__('Change image', 'cagov-design-system') }
										</Button>
									</div>
									{mediaID && (
										<img
											src={mediaURL}
											alt={mediaAlt}
										/>
										)
									}
									</>
							);
						}}
					/>
				</li>
			</ul>
		</>
	);
}
