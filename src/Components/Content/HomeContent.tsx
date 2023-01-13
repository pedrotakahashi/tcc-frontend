import "./styles.css";
import { Accordion, Container} from "react-bootstrap";
import { MdScreenSearchDesktop } from "react-icons/md";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const HomeContent = () => {
  return (
    <>
       <Container className="main-container">
          <Row className="d-flex justify-content-center mt-5">
            <Col md={8}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sobre o Sistema</Accordion.Header>
                <Accordion.Body>
                  O Fct Scraper é um projeto de TCC, criado para fins de pesquisa. Seu propósito é a busca rapida por artigos e noticias
                  utilizando-se de uma palavra chave em específico.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Como utilizar</Accordion.Header>
                <Accordion.Body>
                  Abaixo há um ícone que leverá o usuário diretamente para o sistema de buscas do FCT Scraper. <br/>
                  Na página do sistema de buscas, haverá dois campos para inserir sua pesquisa, o primeiro sendo a url de pesquisa<br/>
                  o segundo campo sendo a palavra chave que desejá buscar naquela url. <br />
                  Em seguida deve-se clicar em procurar e após clicar em procurar o botão de download ficará disponivel<br />
                  para fazer o download da planilha com os textos e suas palavras chaves
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center"> 
            <a href="#/scraper" className="d-flex justify-content-center"> 
              <MdScreenSearchDesktop size={75} color="#007bff"/>
            </a>
              Acesse o FCT Scraper
          </Row>
      </Container>
    </>
  );
};

export default HomeContent;

