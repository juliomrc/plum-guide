import { makeStyles } from '@material-ui/core';
import { centeredVerticalContent, } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const makePropertyOverviewStyles = makeStyles(() => {
    return {
        propertyOverviewContainer: {
            ...centeredVerticalContent,
            backgroundColor: pallette.orange,
        },
    }
});
