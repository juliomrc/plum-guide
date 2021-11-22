import { makePropertyOverviewStyles } from './makePropertyOverviewStyles';
import { PropertyImagesCarousel } from './property-images-carousel';
import { PropertyHighlights } from './PropertyHighlights';

export function PropertyOverview() {
    const cssClasses = makePropertyOverviewStyles();

    return (
        <div className={cssClasses.propertyOverviewContainer}>
            <div>Monsieur Didot</div>
            <PropertyHighlights />
            <div><PropertyImagesCarousel /></div>
        </div>
    );
}
