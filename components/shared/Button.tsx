import IButton from "@Interfaces/button.interface";
import React from "react";

interface Props {
  data: IButton;
  onClick?: any;
}

const Button: React.FC<Props> = ({ data, onClick }) => {
  const { name, type, className } = data;
  return (
    <button
      type={type}
      className={` px-6 py-3 border-2  mr-20 border-black text-xs tracking-widest my-4 mt-8  ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
