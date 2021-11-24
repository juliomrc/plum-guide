import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const useFiltersBarStyles = makeStyles((theme) => {

    return {
        filtersBarContainer: {
            ...centeredContent,
            margin: '20px 0',

            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
            }
        },
        section: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px 10px',
            width: '250px',
            height: '45px',
            borderRight: '0.1px solid gray',

            [theme.breakpoints.down('md')]: {
                borderRight: 'none',
            },
        },
        sectionText: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        sectionLabel: {
            fontSize: '14px',
            color: pallette.gray,
        },
        bookingButton: {
            margin: '10px',
            backgroundColor: pallette.orange,
        },
    }
});
