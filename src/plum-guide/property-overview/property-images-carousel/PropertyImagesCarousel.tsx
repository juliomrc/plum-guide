import { Carousel } from '../../components/carousel';
import { buildImgSrcUrl } from './buildImgSrcUrl';
import { useFetchPropertyImages } from './useFetchPropertyImages';
import { useGetRefBoundingClientRect } from './useGetRefBoundingClientRect';
import { usePropertyImagesCarouselStyles } from './usePropertyImagesCarouselStyles';

export const PropertyImagesCarousel: React.FC = () => {
    const propertyImages = useFetchPropertyImages();
    const { elementRef, height, width } = useGetRefBoundingClientRect();

    const cssClasses = usePropertyImagesCarouselStyles();

    return (
        <div className={cssClasses.propertyImagesCarouselContainer}>
            <div className={cssClasses.imagesCarouselSize} ref={elementRef}>
                <Carousel>
                    {propertyImages.map((imgSrc) => {
                        return (
                            <img
                                key={imgSrc}
                                src={buildImgSrcUrl(imgSrc, height, width)}
                                className={cssClasses.image}
                                alt='Property'
                            />
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}
