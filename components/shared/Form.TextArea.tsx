import { IFormTextArea } from "@Root/interfaces/form.interface";
import React from "react";

interface Props {
  component: IFormTextArea;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<Props> = ({ component, onChange }) => {
  const { type, extraData, name, placeholder } = component;
  return (
    <>
      {extraData && <p className="text-sm text-gray-100">{extraData}</p>}
      <textarea
        onChange={onChange}
        className="block rounded bg-gray-50 border mt-1 border-gray-400 max-w-[700px] min-h-[7rem] w-[80vw] px-2"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
