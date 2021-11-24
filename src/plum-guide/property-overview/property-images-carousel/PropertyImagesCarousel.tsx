import { useEffect, useRef, useState } from 'react';
import { Carousel } from '../../components/carousel';
import { useFetchPropertyImages } from './useFetchPropertyImages';
import { usePropertyImagesCarouselStyles } from './usePropertyImagesCarouselStyles';

interface ImageDimensions {
    height: number;
    width: number;
}

export const PropertyImagesCarousel: React.FC = () => {
    const propertyImages = useFetchPropertyImages();
    const containerRef = useRef<HTMLImageElement>(null);
    const [imageDimensions, setImageDimensions] = useState<ImageDimensions>();

    useEffect(() => {
        if (containerRef.current) {
            const { height, width } = containerRef.current.getBoundingClientRect();
            setImageDimensions({ width, height });
        }
    }, []);


    const cssClasses = usePropertyImagesCarouselStyles();

    return (
        <div ref={containerRef} className={cssClasses.propertyImagesCarouselContainer}>
            <Carousel>
                {propertyImages.map((imageSrc) => {
                    const imageUrl = `${imageSrc}?fit=crop&h=${imageDimensions?.height}`
                    return (
                        <img className={cssClasses.image} src={imageUrl} alt='Property' />
                    )
                })}
            </Carousel>
        </div>
    );
}
