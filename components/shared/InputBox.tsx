import React from "react";
import IInput from "@Interfaces/input.interface";

interface Props {
  inputInfo: IInput;
  handleFormState: (stateName: string, value: string) => void;
}

const InputBox: React.FC<Props> = ({ inputInfo, handleFormState }) => {
  const { id, name, placeholder, type, stateName, value } = inputInfo;
  return (
    <div className="relative">
      <input
        id={name}
        onChange={(e) => {
          if (!stateName) return;
          handleFormState(stateName, e.target.value);
        }}
        name={name}
        type={type}
        value={value}
        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {name}
      </label>
    </div>
  );
};

export default InputBox;
