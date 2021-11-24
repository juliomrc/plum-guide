import { usePropertyOverviewStyles } from './usePropertyOverviewStyles';
import { PropertyImagesCarousel } from './property-images-carousel';
import { PropertyHighlights } from './property-highlights';

export function PropertyOverview() {
    const cssClasses = usePropertyOverviewStyles();

    return (
        <div className={cssClasses.propertyOverviewContainer}>
            <h2 className={cssClasses.propertyName}>Monsieur Didot</h2>
            <PropertyHighlights />
            <PropertyImagesCarousel />
        </div>
    );
}
