import { useEffect } from 'react';

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
import { useBlockProps, useInnerBlocksProps, RichText, MediaUpload, InnerBlocks, InspectorControls } from '@wordpress/block-editor';

/**
 * This package includes a library of generic WordPress components to be used for creating
 * common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { PanelBody, ToggleControl, SelectControl, Button } from '@wordpress/components';

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
			cardType,
			title,
			mediaID,
			mediaURL,
			mediaAlt,
			mediaWidth,
			mediaHeight,
		},
	} = props;

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps();

	const ALLOWED_BLOCKS = ['caweb/card-button', 'core/paragraph'];
	const PARAGRAPH_ONLY = ['core/paragraph'];

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
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

	const onChangeCardType = newCardType => {
		setAttributes({ cardType: newCardType });
	}

	useEffect(() => {
		const cardButtonList = document.querySelectorAll('button.action');
		const cardList = document.querySelectorAll('.cards');

		cardButtonList.forEach((button, idx) => {
			if (button && cardList[idx].dataset?.action === 'interactive') {
				button.style.display = 'none';
			} else {
				button.style.display = 'block';
			}
		});
	}, [cardType]);


	return (
		<div {...blockProps}>
			<ul
				className={'cards'}
				data-orientation={cardType === 'interactive' ? 'media-' : null}
				data-action={cardType === 'interactive' ? cardType : null}
			>
				<li>
					<div className="card-text">
						<RichText
							tagName="h2"
							placeholder={__('Write title…', metadata.textdomain)}
							value={title}
							onChange={onChangeTitle}
						/>

						<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />

					</div>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={mediaID}
						labels={{
							title: __('Feature Card Image', metadata.textdomain),
						}}
						render={({ open }) => {
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
										{__('Change image', metadata.textdomain)}
									</Button>
								</div>
							);
						}}
					/>
				</li>
			</ul>
			<InspectorControls>
				<PanelBody title={'Card Type'}>
					<SelectControl
						label={'Type'}
						value={cardType}
						options={[
							{ value: '', label: 'Select a Card type', disabled: true },
							{ value: 'default', label: 'Default' },
							{ value: 'interactive', label: 'Interactive' }
						]}
						onChange={onChangeCardType}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
