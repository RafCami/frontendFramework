import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import NavBarNoBootstrap from './navbarNoBootstrap'
import {BrowserRouter } from 'react-router-dom'
import Routing from './routing'
import NavBarBootstrap from './navbarBootstrap'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <BrowserRouter>
            <Container className="mt-4">
                <NavBarBootstrap />
                <Routing/>
            </Container>
        </BrowserRouter>
    </StrictMode>,
)
