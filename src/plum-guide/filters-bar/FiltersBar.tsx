import { Button } from '@material-ui/core';
import { FilterSection } from './FilterSection';
import { useFiltersBarStyles } from './useFiltersBarStyles';

export function FiltersBar() {
    const cssClasses = useFiltersBarStyles();

    return (
        <div className={cssClasses.filtersBarContainer}>
            <FilterSection label="From / to" isFilterExpandable>
                <div>3 Jan 2020 - 28 Feb 2020</div>
            </FilterSection>
            <FilterSection label="For" isFilterExpandable>
                <div>2 Guests</div>
            </FilterSection>
            <FilterSection label="Price per night">
                <div>345</div>
            </FilterSection>
            <FilterSection label="Total for 54 nights">
                <div>18,630</div>
            </FilterSection>
            <Button className={cssClasses.bookingButton} variant="contained">
                Instant booking
            </Button>
        </div>
    );
}
