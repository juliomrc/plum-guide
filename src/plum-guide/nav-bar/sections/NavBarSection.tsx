import { useNavBarStyles } from '../useNavBarStyles';

export const NavBarSection: React.FC = ({
    children,
}) => {
    const cssClasses = useNavBarStyles();

    return (
        <div className={cssClasses.navBarSection}>
            {children}
        </div>
    );
};
