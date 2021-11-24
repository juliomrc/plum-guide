import { useFacilitiesHighlightsStyles } from './useFacilitiesHighlightsStyles';

export const FacilitiesHighlights: React.FC = () => {
    const cssClasses = useFacilitiesHighlightsStyles();

    return (
        <div className={cssClasses.facilitiesSection}>
            <span>4 people</span>
            <span>2 bedrooms</span>
            <span>2 bathrooms</span>
            <span>Private terrace</span>
            <span>Peaceful</span>
        </div>
    );
};
