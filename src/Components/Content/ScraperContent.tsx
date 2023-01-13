import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import "./styles.css";
import { Accordion, Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';

const ScraperContent = () => {
  const [enable, setEnable] = useState(true);

  const verifyButtonDownload = () =>{
    enable === false? setEnable(true): setEnable(false) ;
  }

  // const verifySearchButton = (event:any) =>{

  // }

  return (
    <>
       <Container className="main-container">
        <Row bsPrefix="content-page">
          <Col md={6} sm={12} xxs={12}>
          <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Utilizando o Sistema</Accordion.Header>
                <Accordion.Body>
                  Abaixo temos 2 campos de entrada, sendo o primeiro a url a qual iremos inserir nosso site de pesquisa<br />
                  O segundo campo iremos inserir a palavra chave que desejamos procurar<br />
                  O botão de Download fica disponivel após procurarmos pela palavra chave <br />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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

