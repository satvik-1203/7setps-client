import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <div className="fixed right-9 bottom-8 cursor-pointer rounded-full wShadows">
        <Image width="60" height="60" src="/whatsapp.svg" />
      </div>
    </>
  );
};

export default Layout;
