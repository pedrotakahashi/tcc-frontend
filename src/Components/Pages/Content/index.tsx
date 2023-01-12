import Button from 'react-bootstrap/Button';
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import "./styles.css";
import { submit } from "../../../Service/Utils/utils";
import { Container, Nav, Navbar } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';

const Content = () => {
  return (
    <>
    <Container className="main-container mt-4">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Navbar bg="primary" collapseOnSelect expand="md" variant="dark">
            <Container >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                  <Nav>
                    <Nav.Link href="#home">Inicio</Nav.Link>
                      <Nav.Link href="#home">Buscar</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
        </Navbar>
        </Col>
      </Row>
      
      <Row bsPrefix="content-page">
        <Col md={6} sm={12} xs={12}>
          <Form>
            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control placeholder="www.google.com" />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Palavra Chave</Form.Label>
              <Form.Control placeholder="Ministério" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row className="button-form mt-4">
        <Col md={2} sm={4} >
          <Button onClick={submit}> <AiOutlineFileSearch /><br/>Procurar</Button>
        </Col>
        <Col md={1} sm={4} >
          <Button><BsFileEarmarkSpreadsheetFill /><br/>Download</Button>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Content;

