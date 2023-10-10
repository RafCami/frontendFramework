import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import {Container} from 'react-bootstrap'
import './main.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <Container className="mt-4">

        </Container>
    </StrictMode>,
)
