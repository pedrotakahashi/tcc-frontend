import { AiFillQuestionCircle } from "react-icons/ai";

import "./styles.css";

interface InputType {
  text?: string;
  tooltipText: string;
  placeholder: string;
}

const Input = ({ text, tooltipText, placeholder }: InputType) => {
  return (
    <>
      <div className="input-content">
        <form>
          <label className="label-input">
            {text}{" "}
            <span data-tooltip={tooltipText}>
              <AiFillQuestionCircle />
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
