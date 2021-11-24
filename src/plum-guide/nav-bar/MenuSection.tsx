import { useNavBarStyles } from './useNavBarStyles';

export const MenuSection: React.FC = ({
    children,
}) => {
    const cssClasses = useNavBarStyles();

    return (
        <div className={cssClasses.menuSection}>
            {children}
        </div>
    );
};
