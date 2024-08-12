import { getContext, store } from '@wordpress/interactivity';

store('builtnorth-accordion-block', {
    actions: {
        toggle: () => {
            const context = getContext();
            context.isActive = !context.isActive;
        },
    },
    callbacks: {
        logisActive: () => {
            const { isActive } = getContext();
            console.log(`Is open: ${isActive}`);
        },
    },
});