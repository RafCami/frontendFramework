import {FunctionComponent} from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Highscores from '../pages/Highscores/Highscores'
import ChooseRegion from '../pages/Game/ChooseRegion'
import Play from '../pages/Game/Play'
import Game from '../pages/Game/Game'

interface RoutingProps {
    
}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />}>
                <Route index element={<Game/>}/>
                <Route path="region" element={<ChooseRegion />}/>
                <Route path="play/:chosenRegion" element={<Play />}/>
            </Route>
            <Route path="/highscores" element={<Outlet />}>
                <Route index element={<Highscores/>}/>
                <Route path={':chosenRegion'} element={<Highscores/>}/>
            </Route>

        </Routes>
    )
}

export default Routing