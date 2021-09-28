import React from "react";
import Link from "next/link";
import { NavOptions } from "./Layout";

interface Props {
  navOptions: NavOptions;
}

const NavOption: React.FC<Props> = ({ navOptions }) => {
  return (
    <>
      {navOptions.map((option, index) => (
        <Link key={index} href={option.path}>
          <a>
            <div className="font-patrick h-[4.5rem] tracking-widest border-b-[0.1px] border-gray-200 text-black flex justify-center items-center">
              {option.name}
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default NavOption;
