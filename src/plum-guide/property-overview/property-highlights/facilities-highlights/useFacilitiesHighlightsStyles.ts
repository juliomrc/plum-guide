import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../../../common-styles/commonStyles';

export const useFacilitiesHighlightsStyles = makeStyles(() => {
    return {
        facilitiesSection: {
            ...centeredContent,
            flexWrap: 'wrap',
            marginBottom: '10px',
            "& > *:not(:last-child)": {
                marginRight: "10px",
            },
        },
    }
});
