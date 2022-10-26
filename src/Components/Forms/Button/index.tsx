import "./styles.css";

interface IButton {
  text?: string;
}

const Button = ({ text }: IButton) => {
  const sayHello = () => {
    alert("Hello World");
  };

  return (
    <button className="button" onClick={sayHello}>
      {text}
    </button>
  );
};

export default Button;
