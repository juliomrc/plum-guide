
import { usePropertyHighlightsStyles } from './usePropertyHighlightsStyles';
import { FacilitiesHighlights } from './facilities-highlights';
import { LocationHighlights } from './location-highlights';

export const PropertyHighlights: React.FC = () => {
    const cssClasses = usePropertyHighlightsStyles();

    return (
        <div className={cssClasses.propertyHighlightsContainer}>
            <FacilitiesHighlights />
            <LocationHighlights />
        </div>
    );
}
