import {FunctionComponent} from 'react'
import { Link, Navigate, Outlet, useLocation, useParams } from 'react-router-dom'

interface GameProps {
    
}

const Game: FunctionComponent<GameProps> = () => {
    const location = useLocation()
    if(location.pathname.substring(location.pathname.length - 6) === '/game') {
        return <Navigate to={'region'}/>
    }
    const chosenRegion = useParams().chosenRegion
    const subTitle = chosenRegion ? 
    <p>You've chosen to practice the capitals in {chosenRegion}, please {<Link to={'/game'}>Click here</Link>} to choose another region</p> 
    : <p>Please select a region before playing the game</p>

    

    return (
        <>
            <h1>Play the Game!</h1>
            {subTitle}
            <Outlet />
        </>
    )
}

export default Game