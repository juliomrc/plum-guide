import { usePropertyNameStyles } from './usePropertyNameStyles';

export const PropertyName: React.FC = () => {
    const cssClasses = usePropertyNameStyles();
    return <h2 className={cssClasses.propertyName}>Monsieur Didot</h2>;
};
