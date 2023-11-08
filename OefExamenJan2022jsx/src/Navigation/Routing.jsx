import { FunctionComponent } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import MyRepositories from '../pages/my-repositories/myRepositories'
import RepositoryDetail from '../pages/my-repositories/detail/repositoryDetail'

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Outlet />}>
                <Route index element={<MyRepositories />} />
                <Route path={'/:id'} element={<RepositoryDetail />} />
            </Route>
            <Route path={'/projects'} element={<Outlet />}>
                <Route index element={<h1>asd</h1>} />
            </Route>
            {/* <Route path={'*'} element={<UnderConstruction />} /> */}
        </Routes>
    )
}

export default Routing
