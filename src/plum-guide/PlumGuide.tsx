import { FiltersBar } from './filters-bar';
import { NavBar } from './nav-bar';
import { PropertyOverview } from './property-overview';

export function PlumGuide() {
    return (
        <main>
            <NavBar />
            <FiltersBar />
            <PropertyOverview />
        </main>
    );
}
