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
        <div className={cssClasses.propertyImagesCarouselContainer}>
            <div className={cssClasses.imagesCarouselSize} ref={containerRef}>
                <Carousel>
                    {propertyImages.map((imageSrc) => {
                        const imageUrl = `${imageSrc}?fit=clip&h=${imageDimensions?.height}`
                        return (
                            <img key={imageSrc} src={imageUrl} className={cssClasses.image} alt='Property' />
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}
