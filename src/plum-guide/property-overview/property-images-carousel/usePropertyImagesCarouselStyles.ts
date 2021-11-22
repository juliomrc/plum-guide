import { makeStyles } from '@material-ui/core';

export const usePropertyImagesCarouselStyles = makeStyles(() => {
    return {
        propertyImagesCarousel: {
            position: 'relative',
            display: 'flex',
        },
        image: {
            maxHeight: '1000px',
            maxWidth: '500px',
        },
    }
});
