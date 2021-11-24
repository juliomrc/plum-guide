import clsx from 'clsx';
import { useLocationHighlightsStyles } from './useLocationHighlightsStyles';

interface LocationSectionItemProps {
    className?: string;
}

export const LocationSectionItem: React.FC<LocationSectionItemProps> = ({
    children, className,
}) => {
    const cssClasses = useLocationHighlightsStyles();

    return (
        <div className={clsx(cssClasses.locationSectionItem, className)}>
            {children}
        </div>
    );
};
