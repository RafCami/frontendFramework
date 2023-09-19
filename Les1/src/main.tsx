// Importeren van react-dom, de bibliotheek die het renderen mogelijk maakt.
import ReactDOM from 'react-dom/client'

// Aanmaken van de root voor de React applicatie.
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <h1>Hello World!</h1>
)
