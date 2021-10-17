import { IFormInput } from "@Root/interfaces/form.interface";
import React from "react";

interface Props {
  component: IFormInput;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ component, onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        className="block rounded bg-gray-50 border mt-1 border-gray-400 max-w-[700px] h-10 w-[80vw] px-2"
        name={component.name}
        placeholder={component.placeholder}
        type={component.inputType}
      />
      <label htmlFor={component.name}>{component.highlightName}</label>
    </>
  );
};

export default Input;
