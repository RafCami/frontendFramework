import {FunctionComponent} from 'react'
import { Link, Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import ChooseRegion from './ChooseRegion'
import Play from './Play'

interface GameProps {
    
}

const Game: FunctionComponent<GameProps> = () => {
    const location = useLocation()
    if(location.pathname.substring(location.pathname.length - 6) === '/game') {
        <Navigate to={'/game/region'}/>
    }
    const chosenRegion = useParams().chosenRegion
    const subTitle = chosenRegion ? 
    <p>You've chosen to practice the capitals in {chosenRegion}, please {<Link to={'/game'}>Click here</Link>} to choose another region</p> 
    : <p>Please select a region before playing the game</p>

    

    return (
        <>
            <h1>Play the Game!</h1>
            {subTitle}
            {/* {chosenRegion ? <Play /> : <ChooseRegion />} */}
            <Outlet />
        </>
    )
}

export default Game