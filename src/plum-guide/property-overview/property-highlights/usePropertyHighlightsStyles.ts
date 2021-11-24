import { makeStyles } from '@material-ui/core';
import { centeredContent, centeredVerticalContent } from '../../common-styles/commonStyles';

export const usePropertyHighlightsStyles = makeStyles(() => {
    const border = '1px solid black';
    return {
        propertyHighlightsContainer: {
            marginBottom: '30px',
            ...centeredVerticalContent,
        },
        facilitiesSection: {
            "& > *:not(:last-child)": {
                marginRight: "10px",
            },
            marginBottom: '10px',
        },
        locationSection: {
            ...centeredContent,
            padding: '5px',
            borderBottom: border,
            borderTop: border,
        },
        locationSectionItem: {
            ...centeredContent,
            padding: '2px 10px',
        },
        locationMiddleSection: {
            borderRight: border,
            borderLeft: border,
        }
    }
});
