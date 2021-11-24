import { usePropertyOverviewStyles } from './usePropertyOverviewStyles';
import { PropertyName } from './property-name';
import { PropertyImagesCarousel } from './property-images-carousel';
import { PropertyHighlights } from './property-highlights';

export function PropertyOverview() {
    const cssClasses = usePropertyOverviewStyles();

    return (
        <div className={cssClasses.propertyOverviewContainer}>
            <PropertyName />
            <PropertyHighlights />
            <PropertyImagesCarousel />
        </div>
    );
}
