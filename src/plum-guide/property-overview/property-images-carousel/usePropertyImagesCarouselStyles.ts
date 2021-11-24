import { makeStyles } from '@material-ui/core';
import { centeredVerticalContent } from '../../common-styles/commonStyles';
import { pallette } from '../../common-styles/pallette';

export const usePropertyImagesCarouselStyles = makeStyles((theme) => {
    return {
        propertyImagesCarouselContainer: {
            ...centeredVerticalContent,
            width: '100%',
            background: `linear-gradient(180deg, ${pallette.lightMagenta} 80%, ${pallette.white} 20%)`,
        },
        image: {
            height: '100%',
            width: '100%',
        },
        imagesCarouselSize: {
            width: '1000px',
            height: '500px',

            [theme.breakpoints.down('md')]: {
                width: '800px',
                height: '400px',
            },

            [theme.breakpoints.down('sm')]: {
                width: '600px',
                height: '300px',
            },

            [theme.breakpoints.down('xs')]: {
                width: '300px',
                height: '150px',
            }
        },
    }
});
