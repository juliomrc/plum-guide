import { ButtonBase, Link } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { NavBarSection } from './NavBarSection';
import { useNavBarStyles } from '../useNavBarStyles';

export const NavigationSection: React.FC = () => {
    const cssClasses = useNavBarStyles();

    return (
        <NavBarSection>
            <ButtonBase className={cssClasses.burgerIcon}>
                <Menu />
            </ButtonBase>
            <Link href='/' className={cssClasses.menuItem}>
                Homes
            </Link>
            <Link href='/' className={cssClasses.menuItem}>
                Hosts
            </Link>
        </NavBarSection>
    );
};
