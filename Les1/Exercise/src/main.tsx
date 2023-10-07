// Importeren van react-dom, de bibliotheek die het renderen mogelijk maakt.
import ReactDOM from 'react-dom/client'
import './style.css'
import { StrictMode } from 'react'
import App from './app'

// Aanmaken van de root voor de React applicatie.
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
