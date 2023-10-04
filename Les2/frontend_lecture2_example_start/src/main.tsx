import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import Example1 from './example1/example1.tsx'
import Example2 from './example2/example2.tsx'
import ISubjects from './data/subjects.ts'
import './main.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <Example1/>
        <Example2 subjects={ISubjects}/>
    </StrictMode>,
)

