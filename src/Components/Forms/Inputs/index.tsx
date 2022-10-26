import { AiFillQuestionCircle } from "react-icons/ai";

import "./styles.css";

interface IInput {
  text?: string;
  tooltipText: string;
  placeholder: string;
}

const Input = ({ text, tooltipText, placeholder }: IInput) => {
  return (
    <>
      <div className="input-content">
        <form>
          <label className="label-input">
            <span data-tooltip={tooltipText} className="label-span">
              <AiFillQuestionCircle /> {text}
            </span>
            <br />
          </label>
          <input type="text" name="name" placeholder={placeholder} />
        </form>
        <br />
      </div>
    </>
  );
};

export default Input;
