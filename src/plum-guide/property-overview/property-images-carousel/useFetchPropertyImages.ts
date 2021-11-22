import { useEffect, useState } from 'react';

interface ImagesDataAPIResponse {
    id: string;
    imageUrls: string[];
}

export const useFetchPropertyImages = () => {
    const [propertyImages, setPropertyImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const { imageUrls } = await fetchImagesData();
                setPropertyImages(imageUrls);
            } catch {
                // TODO
                setPropertyImages(['Ups bro', '2', '3']);
            }
        };

        fetchInitialData();
    }, []);

    return propertyImages.slice(0, 29);
}

const fetchImagesData = async () => {
    const responseJson = await window.fetch('https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d');
    return await responseJson.json() as ImagesDataAPIResponse;
};
