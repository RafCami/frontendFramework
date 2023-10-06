import {FunctionComponent, MouseEventHandler, PropsWithChildren} from 'react'
import CarouselContainer from './carouselContainer'
import getRandomImage from './images'
import ControlButton from './controlButton'

interface exerciseEightProps extends PropsWithChildren {
    
}

const exerciseEight: FunctionComponent<exerciseEightProps> = () => {
    const images = []
    for (let i = 0; i < 5; i++) {
        images.push(getRandomImage())
    }
    
    const handleClick : MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log(event)
    }

    return (
        <>
            <CarouselContainer>
                <img src={images[0]} alt='carousel' />
                <ControlButton $prev={true} onClick={handleClick}>&lt;</ControlButton>
                <ControlButton $prev={false} onClick={handleClick}>&gt;</ControlButton>
            </CarouselContainer>
        </>
    )
}

export default exerciseEight