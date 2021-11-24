import { makeStyles } from '@material-ui/core';
import { centeredVerticalContent, } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const usePropertyOverviewStyles = makeStyles(() => {
    return {
        propertyOverviewContainer: {
            ...centeredVerticalContent,
            backgroundColor: pallette.lightMagenta,
            marginBottom: '40px',
        },
    };
});
