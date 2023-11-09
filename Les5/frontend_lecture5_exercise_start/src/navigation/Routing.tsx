import { FunctionComponent, Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import ToDoList from '../pages/lists/ToDoList'
import ToDoListDetail from '../pages/lists/detail/ToDoListDetail'
import LoadingPage from '../utils/loadingPage'

interface RoutingProps {
    
}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lists" element={<Suspense fallback={<LoadingPage />}><Outlet /></Suspense>}>
                <Route index element={<ToDoList />} />
                <Route path='/lists:listid' element={<ToDoListDetail />} />
            </Route>
        </Routes>
    )
}

export default Routing