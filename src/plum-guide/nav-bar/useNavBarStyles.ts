import { makeStyles } from '@material-ui/core';
import { centeredContent } from '../common-styles/commonStyles';
import { pallette } from '../common-styles/pallette';

export const useNavBarStyles = makeStyles((theme) => {
    return {
        navBarContainer: {
            display: 'flex',
            minHeight: '45px',
            justifyContent: 'space-between',
            backgroundColor: pallette.white,
            borderBottom: '1px solid gray',
            marginBottom: '15px',

            [theme.breakpoints.down('md')]: {
                padding: '5px',
            }
        },
        menuSection: centeredContent,
        menuItem: {
            margin: '0 10px',
        },
        burgerIcon: {
            padding: '5px',
            height: '100%',
            borderRight: '1px solid gray',
        },
        pageHeader: {
            fontSize: '20px',
        }
    }
});
