
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import "./styles.css";
const SideMenu = () => {
  return (
<>
<Container fluid>
    <Row>
        <Col md={4}>
            <Nav className=" d-none d-md-block bg-dark sidebar" >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </Col>
    </Row>
</Container>

  
</>
    
  );
};

export default SideMenu;
