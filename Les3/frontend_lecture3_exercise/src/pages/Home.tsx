import {FunctionComponent} from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import {Link } from 'react-router-dom'

interface HomeProps {
    
}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <Container>
            <Row>
                <Col>Practice your capitals and become a geography pro!</Col>
                <Col>Want to know more about how other people are better than you? Click here!</Col>
            </Row>
            <Row>
                <Col><Link to={'/game'}><div className='d-grid'><Button size="lg">Practice</Button></div></Link></Col>
                <Col><Link to={'/highscores'}><div className='d-grid'><Button size="lg">Highscores</Button></div></Link></Col>
            </Row>
        </Container>
    )
}

export default Home