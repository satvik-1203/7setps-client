import { IFormSelect } from "@Root/interfaces/form.interface";
import React from "react";

interface Props {
  component: IFormSelect;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<Props> = ({ component, onChange }) => {
  const { options, name } = component;
  return (
    <>
      <select
        onChange={onChange}
        className="block rounded bg-gray-50 border mt-1 border-gray-400 w-40  px-2 py"
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
