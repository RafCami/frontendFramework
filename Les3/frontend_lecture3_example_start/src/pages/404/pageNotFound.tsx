// https://codepen.io/ZonFire99/full/EaYmGV
import gif from '../../assets/404.webm'
import useCountdown from '../../utility/useCountdown.ts'
import styled from 'styled-components'
import {FunctionComponent} from 'react'

const Video404 = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: -1;
`

const CounterContainer = styled.div`
    color: azure;
`

const PageNotFound: FunctionComponent = () => {
    const countdown = useCountdown(5)

    return (
        <div>
            <Video404 src={gif} autoPlay={true} loop={true}/>
            <CounterContainer>
                Redirecting to home in {countdown} seconds
            </CounterContainer>
        </div>

    )
}


export default PageNotFound
