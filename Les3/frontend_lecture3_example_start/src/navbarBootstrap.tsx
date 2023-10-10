import {Container, Nav, Navbar} from 'react-bootstrap'
import {FunctionComponent} from 'react'

const NavBarBootstrap: FunctionComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Les 3: SPA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href={'/'}>Home</Nav.Link>
                        <Nav.Link href={'/foo'}>Foo</Nav.Link>
                        <Nav.Link href={'/bar'}>Bar</Nav.Link>
                        <Nav.Link href={'/class'}>Class</Nav.Link>
                        <Nav.Link href={'/thisLinkProducesA404Error'}>Error page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarBootstrap
