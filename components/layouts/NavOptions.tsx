import React from "react";
import Link from "next/link";
import { NavOptions } from "@Misc/navOptions";

interface Props {
  navOptions: NavOptions;
}

const NavOption: React.FC<Props> = ({ navOptions }) => {
  return (
    <>
      {navOptions.map((option, index) => (
        <Link key={index} href={option.path}>
          <a>
            <div
              className={` flex  font-patrick h-[4.5rem] -z-10  tracking-widest border-b-[0.1px] border-gray-200 text-black justify-center items-center`}
            >
              {option.name}
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default NavOption;
