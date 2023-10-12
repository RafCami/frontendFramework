import { BrowserRouter } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import NavBar from './NavBar'
import Routing from './Routing/Routing'

function App() {

  return (
    <BrowserRouter>
        <Container className="mt-4">
            <NavBar/>
            <Routing/>
        </Container>
    </BrowserRouter>
  )
}

export default App
