import { ButtonBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Link } from '../../components/link';
import { NavBarSection } from './NavBarSection';
import { useNavBarStyles } from '../useNavBarStyles';

export const LoginSection: React.FC = () => {
    const cssClasses = useNavBarStyles();

    return (
        <NavBarSection>
            <Link href='/' className={cssClasses.menuItem}>
                Need help?
            </Link>
            <ButtonBase className={cssClasses.menuItem}>
                Login
            </ButtonBase>
            <ButtonBase>
                <Search />
            </ButtonBase>
        </NavBarSection>
    );
};
