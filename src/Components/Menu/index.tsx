import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"

const Menu = () =>{
    return(
        <Container>    
            <Row>
            <Col md={12} sm={12}>
            <Navbar bg="primary" collapseOnSelect expand="md" variant="dark">
                <Container >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link href={process.env.PUBLIC_URL +'/'}>Inicio</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL +'scraper'}>Buscar</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Col>
        </Row>
        </Container>
)
}

export default Menu;