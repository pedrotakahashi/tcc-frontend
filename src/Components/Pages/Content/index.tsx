import Button from "../../Forms/Button";
import Input from "../../Forms/Inputs";

import "./styles.css";

const Content = () => {
  return (
    <>
      <div className="conteudo">
        <Input
          text="Url"
          tooltipText="É o caminho do site de pesquisa que se deseja"
          placeholder="https://www.google.com"
        />
        <Input
          text="Palavra chave"
          tooltipText="São as palavras chaves que desejamos procurar"
          placeholder="ministério"
        />
        <div className="buttons-form">
          <span>
            <Button text="Procurar" />
          </span>
          <span>
            <Button text="Download" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Content;
