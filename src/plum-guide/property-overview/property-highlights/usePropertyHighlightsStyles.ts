import { makeStyles } from '@material-ui/core';
import { centeredVerticalContent } from '../../common-styles/commonStyles';

export const usePropertyHighlightsStyles = makeStyles(() => {
    return {
        propertyHighlightsContainer: {
            ...centeredVerticalContent,
            marginBottom: '30px',
        },
    };
});
