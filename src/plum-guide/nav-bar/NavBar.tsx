import { ButtonBase } from '@material-ui/core';
import { useNavBarStyles } from './useNavBarStyles';
import { Menu, Search } from '@material-ui/icons';
import { Link } from '../components/link';
import { MenuSection } from './MenuSection';
import { useIsViewPortSmallerThan } from '../components/useIsViewPortSmallerThan';

export function NavBar() {
    const cssClasses = useNavBarStyles();

    const isMobile = useIsViewPortSmallerThan('md');

    const navigationSection = (
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
    );

    const loginSection = (
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
    );

    const logoSection = (
        <MenuSection>
            <h1 className={cssClasses.pageHeader}>
                Plum Guide
            </h1>
        </MenuSection>
    );

    return (
        <div className={cssClasses.navBarContainer}>
            {isMobile
                ? (
                    <>
                        <div>
                            {navigationSection}
                            {loginSection}
                        </div>
                        {logoSection}
                    </>

                )
                : (
                    <>
                        {navigationSection}
                        {logoSection}
                        {loginSection}
                    </>

                )
            }
        </div>
    );
}
