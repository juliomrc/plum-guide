import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../../../common-styles/commonStyles';
import { pallette } from '../../../common-styles/pallette';

export const useLocationHighlightsStyles = makeStyles((theme) => {
    const border = `1px solid ${pallette.gray}`;

    return {
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
            },
        },
    };
});
