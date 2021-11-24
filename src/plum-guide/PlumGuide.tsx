import { FiltersBar } from './filters-bar';
import { NavBar } from './nav-bar';
import { PropertyOverview } from './property-overview';

export const PlumGuide: React.FC = () => (
    <>
        <NavBar />
        <FiltersBar />
        <PropertyOverview />
    </>
);
