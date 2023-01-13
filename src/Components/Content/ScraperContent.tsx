import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import "./styles.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';

const ScraperContent = () => {
  const [enable, setEnable] = useState(true);

  const verifyButtonDownload = () =>{
    enable === false? setEnable(true): setEnable(false) ;
  }

  const verifySearchButton = (event:any) =>{

  }

  return (
    <>
       <Container className="main-container">
        <Row bsPrefix="content-page">
          <Col md={6} sm={12} xxs={12}>
            <Form>
              <Form.Group>
                <Form.Label>URL</Form.Label>
                <Form.Control placeholder="www.google.com" id="urlInput" />
              </Form.Group>
              <Form.Group className='mt-3'>
                <Form.Label>Palavra Chave</Form.Label>
                <Form.Control placeholder="Ministério" id="passwordInput" />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row className="button-form mt-4">
          <Col md={2}>
            <Button onClick={verifyButtonDownload} className="btn-mobile"> <AiOutlineFileSearch /><br/>Procurar</Button>
          </Col>
          <Col md={1}>
            <Button className="btn-mobile" disabled={enable} onChange={verifyButtonDownload}><BsFileEarmarkSpreadsheetFill /><br/>Download</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ScraperContent;

