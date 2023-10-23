import { FunctionComponent } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

interface RoutingProps {
    
}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Outlet />} >
                <Route index element={<Home />} />
                <Route path={':id'} element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default Routing