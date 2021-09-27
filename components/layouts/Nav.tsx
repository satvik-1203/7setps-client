import React from "react";

interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ setState }) => {
  return (
    <nav className="p-[20px] flex absolute top-0 left-0 right-0  z-50 justify-between">
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/575e917ef699bb2cb6543065/1598645488610-G9F9V8T94IY4MNUR19U6/Screenshot+2020-08-29+at+1.40.50+AM.png?format=1500w"
          alt=""
          className="w-48"
        />
      </div>
      <div
        onClick={() => setState((prev) => !prev)}
        className="flex space-y-1 flex-col py-2"
      >
        <div className="w-5 h-[2px] bg-black"></div>
        <div className="w-5 h-[2px] bg-black"></div>
        <div className="w-5 h-[2px] bg-black"></div>
      </div>
    </nav>
  );
};

export default Nav;
