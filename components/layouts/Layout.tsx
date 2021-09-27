import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

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

const Layout: React.FC = ({ children }) => {
  const [navOpen, setNavOPen] = useState(false);
  const control = useAnimation();

  useEffect(() => {
    if (navOpen) control.start("animate");
    if (!navOpen) control.start("initial");
  }, [navOpen]);
  return (
    <>
      <motion.div variants={bodyVariants} animate={control}>
        <Nav setState={setNavOPen} />
        {children}
      </motion.div>
      <div className="fixed right-9 bottom-8 cursor-pointer rounded-full wShadows">
        <Image width="60" height="60" src="/whatsapp.svg" />
      </div>
    </>
  );
};

export default Layout;
