import { makeStyles } from '@material-ui/core';

export const useCarouselStyles = makeStyles(() => {
    const topPosition = 'calc(50% - 20px)';
    return {
        carousel: {
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
        },
        itemsContainer: {
            padding: '0 40px',
            height: '100%',
        },
        rightSlideButton: {
            position: 'absolute',
            right: '5px',
            top: topPosition,
        },
        leftSlideButton: {
            position: 'absolute',
            left: '5px',
            top: topPosition,
        }
    }
});
