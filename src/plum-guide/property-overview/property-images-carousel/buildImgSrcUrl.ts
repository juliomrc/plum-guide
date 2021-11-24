export const buildImgSrcUrl = (imgSrc: string, height?: number, width?: number) => {
    return `${imgSrc}?fit=clip&h=${height}&w=${width}`;
}
