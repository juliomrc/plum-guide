import { makeStyles } from '@material-ui/core';
import { centeredVerticalContent } from '../../common-styles/commonStyles';
import { pallette } from '../../common-styles/pallette';

export const usePropertyImagesCarouselStyles = makeStyles(() => {
    return {
        propertyImagesCarouselContainer: {
            display: 'flex',
            width: '100%',
            minHeight: '500px',
            background: `linear-gradient(180deg, ${pallette.lightMagenta} 80%, ${pallette.white} 20%)`,
            ...centeredVerticalContent,
        },
        image: {
            maxHeight: '100%',
            maxWidth: '100%',
        },
    }
});
