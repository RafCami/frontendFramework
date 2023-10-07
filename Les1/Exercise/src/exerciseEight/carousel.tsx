import { FunctionComponent, MouseEventHandler, PropsWithChildren, useState, Children } from 'react'
import CarouselContainer from './carouselContainer'
import ControlButton from './controlButton'

interface carouselProps extends PropsWithChildren {
    
}

const Carousel: FunctionComponent<carouselProps> = ({children}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const childrenArray = Children.toArray(children)
        
    const handlePrevClick : MouseEventHandler<HTMLButtonElement> = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? childrenArray.length - 1 : currentImageIndex - 1)
    }
    const handleNextClick : MouseEventHandler<HTMLButtonElement> = () => {
        setCurrentImageIndex(currentImageIndex === childrenArray.length - 1 ? 0 : currentImageIndex + 1)
    }

    return (
        <CarouselContainer>
            <div style={{'display': 'none'}}>
                {children}
            </div>

            <ControlButton $prev={true} onClick={handlePrevClick}>&lt;</ControlButton>
            {childrenArray[currentImageIndex]}
            <ControlButton $prev={false} onClick={handleNextClick}>&gt;</ControlButton>
        </CarouselContainer>
    )
}

export default Carousel;