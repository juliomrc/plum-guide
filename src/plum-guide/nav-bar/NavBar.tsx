import { ButtonBase, Link } from '@material-ui/core';
import { makeNavBarStyles } from './makeNavBarStyles';
import { Menu } from '@material-ui/icons';
import { Search } from '@material-ui/icons';

export function NavBar() {
    const cssClasses = makeNavBarStyles();

    return (
        <div className={cssClasses.navBarContainer}>
            <div className={cssClasses.menuSection}>
                <ButtonBase className={cssClasses.burgerIcon}>
                    <Menu />
                </ButtonBase>
                <Link href='/' className={cssClasses.menuItem}>
                    Homes
                </Link>
                <Link href='/' className={cssClasses.menuItem}>
                    Hosts
                </Link>
            </div>
            <Link href='/' className={cssClasses.menuSection}>
                Plum Guide
            </Link>
            <div className={cssClasses.menuSection}>
                <Link href='/' className={cssClasses.menuItem}>
                    Need help?
                </Link>
                <ButtonBase className={cssClasses.menuItem}>
                    Login
                </ButtonBase>
                <ButtonBase>
                    <Search />
                </ButtonBase>
            </div>
        </div>
    );
}
