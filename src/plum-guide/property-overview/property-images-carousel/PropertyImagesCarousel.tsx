import { Carousel } from '../../components/carousel';
import { useFetchPropertyImages } from './useFetchPropertyImages';
import { usePropertyImagesCarouselStyles } from './usePropertyImagesCarouselStyles';

export const PropertyImagesCarousel: React.FC = () => {
    const propertyImages = useFetchPropertyImages();
    const cssClasses = usePropertyImagesCarouselStyles();

    return (
        <div className={cssClasses.propertyImagesCarousel}>
            <Carousel>
                {propertyImages.map((imageSrc) => (
                    <img className={cssClasses.image} src={imageSrc} alt='Property' />
                ))}
            </Carousel>
        </div>
    );
}
