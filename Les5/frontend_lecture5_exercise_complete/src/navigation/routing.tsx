import {FunctionComponent} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import Login from '../pages/login/login.tsx'
import ToDoLists from '../pages/lists/toDoLists.tsx'
import ToDoListDetail from '../pages/lists/detail/toDoListDetail.tsx'
import Home from '../pages/home/home.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/lists'} element={<Outlet/>}>
                <Route index element={<ToDoLists/>}/>
                <Route path={':id'} element={<ToDoListDetail/>}/>
            </Route>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    )
}

export default Routing
