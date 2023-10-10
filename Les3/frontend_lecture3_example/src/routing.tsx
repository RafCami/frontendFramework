import {FunctionComponent} from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Foo from './pages/foo/foo'
import Bar from './pages/bar/bar'
import Home from './pages/home/home'
import Class from './pages/class/class'
import PageNotFound from './pages/404/pageNotFound'
import Student from './pages/class/student'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/foo'} element={<Foo/>}/>
            <Route path={'/bar'} element={<Bar/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/class'} element={<Outlet/>}>
                <Route index element={<Class/>}/>
                <Route path={':id'} element={<Student/>}/>
            </Route>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing
