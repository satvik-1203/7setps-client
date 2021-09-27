import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const bodyVariants = {
  initial: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    x: "-80%",
    transition: {
      duration: 0.4,
    },
  },
};

const navOptions = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "HOW DO WE DO IT ?",
    path: "/how-do-we-do-it",
  },
  {
    name: "PROFILES",
    path: "/profiles",
  },
  {
    name: "CONTACT US",
    path: "/contact-us",
  },
];

const Layout: React.FC = ({ children }) => {
  const [navOpen, setNavOPen] = useState(false);
  const control = useAnimation();

  useEffect(() => {
    if (navOpen) control.start("animate");
    if (!navOpen) control.start("initial");
  }, [navOpen]);
  return (
    <>
      <div className="relative">
        <div className="absolute right-0 top-0 bottom-0 w-[80%]">
          {navOptions.map((option, index) => (
            <Link key={index} href={option.path}>
              <a>
                <div className="font-patrick h-[4.5rem] tracking-widest border-b-[0.1px] border-gray-200 text-black flex justify-center items-center">
                  {option.name}
                </div>
              </a>
            </Link>
          ))}
        </div>
        <motion.div variants={bodyVariants} animate={control}>
          <Nav setState={setNavOPen} />
          {children}
        </motion.div>
      </div>
      <div className="fixed right-9 bottom-8 cursor-pointer rounded-full wShadows">
        <Image width="60" height="60" src="/whatsapp.svg" />
      </div>
    </>
  );
};

export default Layout;
