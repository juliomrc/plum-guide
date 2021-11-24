import { useIsViewPortSmallerThan } from '../components/useIsViewPortSmallerThan';
import { LoginSection } from './sections/LoginSection';
import { LogoSection } from './sections/LogoSection';
import { NavigationSection } from './sections/NavigationSection';
import { useNavBarStyles } from './useNavBarStyles';

export const NavBar: React.FC = () => {
    const cssClasses = useNavBarStyles();

    const isMobile = useIsViewPortSmallerThan('md');


    return (
        <div className={cssClasses.navBarContainer}>
            {isMobile
                ? (
                    <>
                        <div>
                            <NavigationSection />
                            <LoginSection />
                        </div>
                        <LogoSection />
                    </>
                )
                : (
                    <>
                        <NavigationSection />
                        <LogoSection />
                        <LoginSection />
                    </>
                )}
        </div>
    );
};
