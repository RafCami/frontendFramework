import {FunctionComponent, PropsWithChildren} from 'react'
import Carousel from './carousel'
import getRandomImage from './images'

interface exerciseEightProps extends PropsWithChildren {
    
}

const exerciseEight: FunctionComponent<exerciseEightProps> = () => {
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < 5; i++) {
        const img = new Image();
        img.src = getRandomImage();
        img.alt = `image${i+1}`;
        images.push(img);
    }

    return (
        <>
            <Carousel>
                {images.map((image, index) => { return <img key={index} src={image.src} alt={image.alt} /> })}
                {/* <img src={getRandomImage()} alt='image1' />
                <img src={getRandomImage()} alt='image2' />
                <img src={getRandomImage()} alt='image3' />
                <img src={getRandomImage()} alt='image4' />
                <img src={getRandomImage()} alt='image5' /> */}
            </Carousel>
        </>
    )
}

export default exerciseEight