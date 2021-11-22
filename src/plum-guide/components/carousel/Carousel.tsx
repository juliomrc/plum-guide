import React, { useState } from 'react';
import { useCarouselStyles } from './useCarouselStyles';

interface CarouselProps {
    children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselItemsCount = React.Children.count(children);

    const handleChangeActiveIndex = (newIndex: number) => {
        let newActiveIndex = newIndex;

        if (newIndex >= carouselItemsCount) {
            newActiveIndex = 0;
        } else if (newIndex < 0) {
            newActiveIndex = carouselItemsCount - 1;
        }

        setActiveIndex(newActiveIndex);
    }

    const handleSlideLeft = () => {
        handleChangeActiveIndex(activeIndex - 1);
    };

    const handleSlideRight = () => {
        handleChangeActiveIndex(activeIndex + 1);
    };

    const cssClasses = useCarouselStyles();

    if (!children || !children.length) {
        return null;
    }

    return (
        <div className={cssClasses.carousel}>
            <button className={cssClasses.leftSlideButton} onClick={handleSlideLeft}>Left</button>
            {children[activeIndex]}
            <button className={cssClasses.rightSlideButton} onClick={handleSlideRight}>Right</button>
        </div>
    );
};
