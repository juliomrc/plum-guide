import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';

export const useFiltersBarStyles = makeStyles(() => {
    return {
        filtersBarContainer: {
            ...centeredContent,
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '10px',
            width: '200px',
            borderRight: '1px solid black'
        }
    }
});
