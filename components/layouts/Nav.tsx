import React from "react";
import { NavOptions } from "@Misc/navOptions";
import Link from "next/link";

interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  navOptions: NavOptions;
}

const Nav: React.FC<Props> = ({ setState, navOptions }) => {
  return (
    <nav className="p-[20px] lg:px-[60px] flex absolute top-0 left-0 right-0 z-50 justify-between items-center">
      <Link href="/">
        <a>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/575e917ef699bb2cb6543065/1598645488610-G9F9V8T94IY4MNUR19U6/Screenshot+2020-08-29+at+1.40.50+AM.png?format=1500w"
              alt=""
              className="w-48"
            />
          </div>
        </a>
      </Link>
      <div
        onClick={() => setState((prev) => !prev)}
        className="flex lg:hidden space-y-1 flex-col py-2"
      >
        <div className="w-5 h-[2px] bg-black"></div>
        <div className="w-5 h-[2px] bg-black"></div>
        <div className="w-5 h-[2px] bg-black"></div>
      </div>
      <div className="hidden lg:flex  lg:space-x-8">
        {navOptions.map((option, index) => (
          <div key={index} className="font-patrick ">
            <Link href={option.path}>
              <a className="text-black tracking-widest">{option.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
