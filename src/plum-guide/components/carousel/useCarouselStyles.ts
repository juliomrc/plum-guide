import { makeStyles } from '@material-ui/core';

export const useCarouselStyles = makeStyles(() => {
    const topPosition = 'calc(50% - 20px)';
    return {
        carousel: {
            position: 'relative',
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
