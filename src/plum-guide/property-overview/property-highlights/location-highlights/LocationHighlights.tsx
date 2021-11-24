import { LocationSectionItem } from './LocationSectionItem';
import { LocationOnOutlined, TrainOutlined, ArrowUpward } from '@material-ui/icons';
import { useLocationHighlightsStyles } from './useLocationHighlightsStyles';

export const LocationHighlights: React.FC = () => {
    const cssClasses = useLocationHighlightsStyles();

    return (
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
    );
};
