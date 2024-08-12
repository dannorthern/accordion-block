import { getContext, store } from '@wordpress/interactivity';

store('interactive-tabs-experiment', {
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