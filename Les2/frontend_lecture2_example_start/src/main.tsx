import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import Example1 from './example1/example1.tsx'
import './main.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <Example1/>
    </StrictMode>,
)

