import { Button, ButtonBase } from '@material-ui/core';
import { useFiltersBarStyles } from './useFiltersBarStyles';

export function FiltersBar() {
    const cssClasses = useFiltersBarStyles();

    return (
        <div className={cssClasses.filtersBarContainer}>
            <ButtonBase className={cssClasses.section}>
                <div>From / to</div>
                <div>3 Jan 2020 - 28 Feb 2020</div>
            </ButtonBase>
            <ButtonBase className={cssClasses.section}>
                <div>For</div>
                <div>2 Guests</div>
            </ButtonBase>
            <div className={cssClasses.section}>
                <div>Price per night</div>
                <div>345</div>
            </div>
            <div className={cssClasses.section}>
                <div>Total for 54 nights</div>
                <div>18,630</div>
            </div>
            <Button variant="contained">
                Instant booking
            </Button>
        </div>
    );
}
