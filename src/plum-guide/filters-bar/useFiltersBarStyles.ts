import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';

export const useFiltersBarStyles = makeStyles(() => {
    return {
        filtersBarContainer: {
            ...centeredContent,
        },
    }
});
