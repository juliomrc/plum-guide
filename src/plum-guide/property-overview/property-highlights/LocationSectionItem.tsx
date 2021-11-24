import clsx from 'clsx';
import { usePropertyHighlightsStyles } from './usePropertyHighlightsStyles';

interface LocationSectionItemProps {
    className?: string;
}

export const LocationSectionItem: React.FC<LocationSectionItemProps> = ({
    children, className,
}) => {
    const cssClasses = usePropertyHighlightsStyles();

    return (
        <div className={clsx(cssClasses.locationSectionItem, className)}>
            {children}
        </div>
    );
};
