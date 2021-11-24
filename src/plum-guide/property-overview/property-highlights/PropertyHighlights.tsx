import { LocationOnOutlined, TrainOutlined, ArrowUpward } from '@material-ui/icons';
import { usePropertyHighlightsStyles } from './usePropertyHighlightsStyles';
import { LocationSectionItem } from './LocationSectionItem';

export const PropertyHighlights = () => {
    const cssClasses = usePropertyHighlightsStyles();

    return (
        <div className={cssClasses.propertyHighlightsContainer}>
            <div className={cssClasses.facilitiesSection}>
                <span>4 people</span>
                <span>2 bedrooms</span>
                <span>2 bathrooms</span>
                <span>Private terrace</span>
                <span>Peaceful</span>
            </div>
            <div className={cssClasses.locationSection}>
                <LocationSectionItem>
                    <LocationOnOutlined />
                    Notthing Hill, London
                </LocationSectionItem>
                <LocationSectionItem className={cssClasses.locationMiddleSection}>
                    <TrainOutlined />
                    Walk 6 mins (Westbourne Park Station)
                </LocationSectionItem>
                <LocationSectionItem>
                    <ArrowUpward />
                    Stairs
                </LocationSectionItem>
            </div>
        </div>
    );
}
