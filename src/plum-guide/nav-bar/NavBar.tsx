import { ButtonBase } from '@material-ui/core';
import { useNavBarStyles } from './useNavBarStyles';
import { Menu, Search } from '@material-ui/icons';
import { Link } from '../components/link';
import { MenuSection } from './MenuSection';

export function NavBar() {
    const cssClasses = useNavBarStyles();

    return (
        <div className={cssClasses.navBarContainer}>
            <MenuSection>
                <ButtonBase className={cssClasses.burgerIcon}>
                    <Menu />
                </ButtonBase>
                <Link href='/' className={cssClasses.menuItem}>
                    Homes
                </Link>
                <Link href='/' className={cssClasses.menuItem}>
                    Hosts
                </Link>
            </MenuSection>
            <MenuSection>
                <h1 className={cssClasses.pageHeader}>
                    Plum Guide
                </h1>
            </MenuSection>
            <MenuSection>
                <Link href='/' className={cssClasses.menuItem}>
                    Need help?
                </Link>
                <ButtonBase className={cssClasses.menuItem}>
                    Login
                </ButtonBase>
                <ButtonBase>
                    <Search />
                </ButtonBase>
            </MenuSection>
        </div>
    );
}
