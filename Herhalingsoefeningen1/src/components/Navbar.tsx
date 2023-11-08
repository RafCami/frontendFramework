import {Container, Nav, Navbar} from 'react-bootstrap'
import {FunctionComponent} from 'react'
import {LinkContainer} from 'react-router-bootstrap'

const NavigationBar: FunctionComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <LinkContainer to={'/'}>
                    <Navbar.Brand>Small Webshop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to={'/laptops'}>
                            <Nav.Link>Laptops</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/smartphones'}>
                            <Nav.Link>Smartphones</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/kitchen'}>
                            <Nav.Link>Keuken</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/washing-machines'}>
                            <Nav.Link>Wasmachines</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/about'}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
