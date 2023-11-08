import { FunctionComponent } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SearchPage from './Page/SearchPage'
import UnderConstruction from './UnderConstruction'
import Detail from './Computer/Detail'

interface RoutingProps {}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path={'/'} element={<SearchPage />} />
            <Route path={'/laptops'} element={<Outlet />}>
                <Route index element={<SearchPage />} />
                <Route path={'/laptops/:id'} element={<Detail />} />
            </Route>
            <Route path={'*'} element={<UnderConstruction />} />
        </Routes>
    )
}

export default Routing
