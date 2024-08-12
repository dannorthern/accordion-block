/**
 * Import dependencies.
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';


/**
 * Edit function.
 */
function Edit() {
    const blockProps = useBlockProps({
        className: 'accordion',
    });

    const ALLOWED_BLOCKS = ['builtnorth/accordion-item'];
    const TEMPLATE = [
        ['builtnorth/accordion-item', {}],
        ['builtnorth/accordion-item', {}],
    ];

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
    });

    // Return the layout for the edit.
    return <div {...innerBlocksProps} />;
}

/**
 * Exports the edit function.
 */
export default Edit;