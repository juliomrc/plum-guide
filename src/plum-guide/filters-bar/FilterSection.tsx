import { IconButton } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { useFiltersBarStyles } from './useFiltersBarStyles';

interface FilterSectionProps {
    label: string;
    isFilterExpandable?: boolean;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
    isFilterExpandable, label, children,
}) => {
    const cssClasses = useFiltersBarStyles();

    return (
        <div className={cssClasses.section}>
            <div className={cssClasses.sectionText}>
                <div className={cssClasses.sectionLabel}>{label}</div>
                {children}
            </div>
            {isFilterExpandable && (
                <IconButton>
                    <KeyboardArrowDown />
                </IconButton>
            )}
        </div>

    );
};
