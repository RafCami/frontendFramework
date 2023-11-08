import { FunctionComponent, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface WrapperProps extends PropsWithChildren {
    heigth?: number
}

const Wrapper = styled.div<WrapperProps>`
overflow-x: hidden;
overflow-y: scroll;
height: ${props => `${props.heigth ?? 100}dvh`};
`

interface ScrollWrapperProps extends PropsWithChildren {
    heigth?: number
}

const ScrollWrapper: FunctionComponent<ScrollWrapperProps> = ({ children, heigth }) => {
    return (
        <Wrapper heigth={heigth}>
            {children}
        </Wrapper>
    )
}

export default ScrollWrapper