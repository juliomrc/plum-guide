import { makeStyles } from '@material-ui/core';
import { centeredContent, centeredVerticalContent } from '../../common-styles/commonStyles';

export const usePropertyHighlightsStyles = makeStyles((theme) => {
    const border = '1px solid black';
    return {
        propertyHighlightsContainer: {
            marginBottom: '30px',
            ...centeredVerticalContent,
        },
        facilitiesSection: {
            ...centeredContent,
            flexWrap: 'wrap',
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

            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            }
        },
        locationSectionItem: {
            ...centeredContent,
            margin: '5px',
            padding: '2px 10px',
        },
        locationMiddleSection: {
            borderRight: border,
            borderLeft: border,

            [theme.breakpoints.down('xs')]: {
                border: 'none',
            }
        }
    }
});
