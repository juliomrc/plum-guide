import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const makeNavBarStyles = makeStyles(() => {
    return {
        navBarContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: pallette.background,
            borderBottom: '1px solid black',
            marginBottom: '15px',
        },
        menuSection: centeredContent,
        menuItem: {
            margin: '0 10px',
        },
        burgerIcon: {
            padding: '5px',
            borderRight: '0.1px solid black',
        }
    }
});
