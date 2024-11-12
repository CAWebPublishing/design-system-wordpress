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
import { PanelBody, ToggleControl, SelectControl, Button, Flex, FlexBlock, FlexItem } from '@wordpress/components';

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
export default function Edit(props) {
	let {
		setAttributes,
		attributes: { cardType, imageLocation },
	} = props;

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['caweb/card'];

	const onChangeCardType = newCardType => {
		setAttributes({ cardType: newCardType });
	}

	const onChangeImageLocation = newImageLocation => {
		setAttributes({ imageLocation: newImageLocation });
	}

	const imageOnRight = (card, image, li) => {
		card.style.order = 1;
		image.classList.add('image-on-right');
		image.classList.remove('image-on-top');
		li.classList.remove('image-on-top');
	}

	const imageOnLeft = (card, image, li) => {
		card.style.order = 2;
		image.classList.remove('image-on-right');
		image.classList.remove('image-on-top');
		li.classList.remove('image-on-top');
	}

	const imageOnTop = (card, image, li) => {
		card.style.order = 2;
		image.classList.remove('image-on-right');
		image.classList.add('image-on-top');
		li.classList.add('image-on-top');
	}

	const setCardImageLocation = (location) => {
		const cardList = document.querySelectorAll('.cards .card-text');
		const cardListItem = document.querySelectorAll('.cards li');
		const imageList = document.querySelectorAll('.cards img');

		cardList.forEach((card, idx) => {
			if (cardType === 'interactive') {
				if (location === 'right') {
					imageOnRight(card, imageList[idx], cardListItem[idx]);
				}
				if (location === 'left') {
					imageOnLeft(card, imageList[idx], cardListItem[idx]);
				}
				if (location === 'top') {
					imageOnTop(card, imageList[idx], cardListItem[idx]);
				}
			} else {
				card.style.order = 2;
				imageList[idx].classList.remove('image-on-right');
			}
		});

	}

	useEffect(() => {
		const cardButtonList = document.querySelectorAll('button.action');
		// const cardList = document.querySelectorAll('.cards');

		console.log('What is cardType: ', cardType);
		console.log('What is imageLocation: ', imageLocation);

		cardButtonList.forEach((button, idx) => {
			if (button && cardType === 'interactive') {
				button.style.display = 'none';
			} else {
				button.style.display = 'block';
			}
		});

		setCardImageLocation(imageLocation);
	}, [cardType, imageLocation]);

	return (
		<>
			<ul
				{...blockProps}
				className={'cards'}
				data-orientation={cardType === 'interactive' ? "media-" : null}
				data-action={cardType === 'interactive' ? cardType : null}
			>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</ul>
			<InspectorControls>
				<PanelBody title={'Card Type'}>
					<SelectControl
						label={'Type'}
						value={cardType}
						options={[
							{ value: '', label: 'Select a Card type', disabled: true },
							{ value: 'default', label: 'Static' },
							{ value: 'interactive', label: 'Interactive' }
						]}
						onChange={onChangeCardType}
					/>
					<SelectControl
						label={'Image Location'}
						value={imageLocation}
						options={[
							{ value: '', label: 'Select an image location', disabled: true },
							{ value: 'top', label: 'Top' },
							{ value: 'right', label: 'Right' },
							{ value: 'left', label: 'Left' }
						]}
						onChange={onChangeImageLocation}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
