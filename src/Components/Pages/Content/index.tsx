import Input from "../../Forms/Inputs";
import "./styles.css";

const Content = () => {
  return (
    <>
      <div className="conteudo">
        <Input
          // text="Url"
          tooltipText="É o caminho do site de pesquisa que se deseja"
          placeholder="https://www.google.com"
        />
        <Input
          // text="Palavras chaves"
          tooltipText="São as palavras chaves que desejamos procurar"
          placeholder="ministério"
        />
      </div>
    </>
  );
};

export default Content;
