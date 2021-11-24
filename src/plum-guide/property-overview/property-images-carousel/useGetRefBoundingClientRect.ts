import { useEffect, useRef, useState } from 'react';

export const useGetRefBoundingClientRect = () => {
    const elementRef = useRef<HTMLImageElement>(null);
    const [imageDimensions, setImageDimensions] = useState<DOMRect>();

    useEffect(() => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            setImageDimensions(rect);
        }
    }, []);

    return {
        elementRef,
        height: imageDimensions?.height,
        width: imageDimensions?.width,
    };
};
