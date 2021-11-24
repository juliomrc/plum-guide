import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const useFiltersBarStyles = makeStyles(() => {

    return {
        filtersBarContainer: {
            ...centeredContent,
            margin: '20px 0',
        },
        section: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px 10px',
            width: '250px',
            height: '45px',
            borderRight: '0.1px solid gray'
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
