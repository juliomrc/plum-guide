import { NavBarSection } from './NavBarSection';
import { useNavBarStyles } from '../useNavBarStyles';

export const LogoSection: React.FC = () => {
    const cssClasses = useNavBarStyles();

    return (
        <NavBarSection>
            <h1 className={cssClasses.pageHeader}>
                Plum Guide
            </h1>
        </NavBarSection>
    );
}
