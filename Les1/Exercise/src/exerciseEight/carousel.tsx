import { FunctionComponent, MouseEventHandler, PropsWithChildren, useState, Children, ReactNode } from 'react'
import CarouselContainer from './carouselContainer'
import ControlButton from './controlButton'

interface carouselProps extends PropsWithChildren {
    
}

const Carousel: FunctionComponent<carouselProps> = ({children}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [direction, setDirection] = useState<null | 'previous' | 'next'>(null)
    const childrenArray = Children.toArray(children)
    
    let previousIndex: number = direction === 'next' ? (currentImageIndex === 0 ? childrenArray.length - 1 : currentImageIndex - 1) : (currentImageIndex === childrenArray.length - 1 ? 0 : currentImageIndex + 1)
    let previousSlide: ReactNode | undefined = direction === null ? undefined : previousIndex
    let nextSlide = currentImageIndex

    if (direction === 'previous') {
        previousSlide = currentImageIndex
        nextSlide = previousIndex
    }

    const handlePrevClick : MouseEventHandler<HTMLButtonElement> = () => {
        setDirection('previous')
        setCurrentImageIndex(currentImageIndex === 0 ? childrenArray.length - 1 : currentImageIndex - 1)
    }
    const handleNextClick : MouseEventHandler<HTMLButtonElement> = () => {
        setDirection('next')
        setCurrentImageIndex(currentImageIndex === childrenArray.length - 1 ? 0 : currentImageIndex + 1)
    }

    return (
        <CarouselContainer className={direction === 'previous' ? 'slideOutRight' : direction === 'next' ? 'slideOutLeft' : ''}>
            <div style={{'display': 'none'}}>
                {children}
            </div>
            
            <ControlButton $prev={true} onClick={handlePrevClick}>&lt;</ControlButton>
            <>
                {previousSlide !== undefined ? childrenArray[previousSlide] : <></>}
            </>
            <>
                {nextSlide !== undefined ? childrenArray[nextSlide] : <></>}
            </>
            <ControlButton $prev={false} onClick={handleNextClick}>&gt;</ControlButton>
        </CarouselContainer>
    )
}

export default Carousel;