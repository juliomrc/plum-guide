import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const useNavBarStyles = makeStyles((theme) => {
    const navBarBorder = `1px solid ${pallette.gray}`;

    return {
        navBarContainer: {
            display: 'flex',
            minHeight: '45px',
            justifyContent: 'space-between',
            borderBottom: navBarBorder,
            marginBottom: '15px',

            [theme.breakpoints.down('md')]: {
                padding: '5px',
            }
        },
        navBarSection: centeredContent,
        menuItem: {
            margin: '0 10px',
        },
        burgerIcon: {
            padding: '5px',
            height: '100%',
            borderRight: navBarBorder,
        },
        pageHeader: {
            fontSize: '20px',
        }
    }
});
