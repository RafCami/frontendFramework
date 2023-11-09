import {Navigate, useLocation} from 'react-router-dom'
import {FunctionComponent} from 'react'
import {useGetProfile} from './api/users.ts'
import Navigation from './navigation/navigation.tsx'
import {Container} from 'react-bootstrap'
import Routing from './navigation/routing.tsx'

const App: FunctionComponent = () => {
    const {pathname} = useLocation()
    const {data: profile} = useGetProfile()

    if (!profile?.id && pathname !== '/login') {
        return <Navigate to={'/login'}/>
    }

    return (
        <>
            <Navigation/>
            <Container className="mt-5">
                <Routing/>
            </Container>
        </>
    )
}

export default App
