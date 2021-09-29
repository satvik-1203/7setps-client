import React from "react";
import Link from "next/link";
import { NavOptions } from "@Misc/navOptions";

interface Props {
  navOptions: NavOptions;
  state: boolean;
}

const NavOption: React.FC<Props> = ({ navOptions, state }) => {
  return (
    <>
      {navOptions.map((option, index) => (
        <Link key={index} href={option.path}>
          <a>
            <div
              className={` ${
                !state ? "hidden" : "flex"
              } font-patrick h-[4.5rem] tracking-widest border-b-[0.1px] border-gray-200 text-black justify-center items-center`}
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
