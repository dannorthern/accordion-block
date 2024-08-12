import { InnerBlocks, InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

function Edit(props) {
    const {
        attributes: { title, defaultState },
        setAttributes,
        clientId,
    } = props;

    const blockProps = useBlockProps({
        className: `accordion__item`,
	});

    const [isActive, setIsActive] = useState(defaultState);

    useEffect(() => {
        setIsActive(defaultState);
    }, [defaultState]);

    const setDefaultState = (value) => {
        setAttributes({ defaultState: value });
        setIsActive(value);
    };

    const toggleAccordion = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsActive(!isActive);
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings', 'builtnorth-accordion-block')}>
                    <ToggleControl
                        label={__('Open by default', 'builtnorth-accordion-block')}
                        checked={defaultState}
                        onChange={setDefaultState}
                    />
                </PanelBody>
            </InspectorControls>
            <div 
                {...blockProps} 
                className={`${blockProps.className} ${isActive ? 'is-active' : ''}`}
            >
                <div className="accordion__title">
					<span className="accordion__title-text">
						<RichText
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__('Accordion title', 'builtnorth-accordion-block')}
						/>
					</span>
                    <span
                        className="accordion__toggle"
                        onClick={toggleAccordion}
                        aria-expanded={isActive}
                        aria-controls={`accordion-content-${clientId}`}
                    ></span>
                </div>

                <div
                    id={`accordion-content-${clientId}`}
                    className="accordion__content"
                    style={{ display: isActive ? 'block' : 'none' }}
                >
                    <InnerBlocks />
                </div>
            </div>
        </>
    );
}

export default Edit;