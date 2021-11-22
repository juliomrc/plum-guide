import { useFiltersBarStyles } from './useFiltersBarStyles';

export function FiltersBar() {
    const cssClasses = useFiltersBarStyles();

    return (
        <div className={cssClasses.filtersBarContainer}>
            <button>
                From/to
            </button>
            <button>
                For
            </button>
            <span>
                Price per night
            </span>
            <span>
                Total
            </span>
            <button>
                Instant booking
            </button>
        </div>
    );
}
