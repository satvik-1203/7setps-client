import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import NavOptions from "./NavOptions";
import { navOptions } from "@Misc/navOptions";
import { useRouter } from "next/router";

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
  const [navOpen, setNavOpen] = useState(false);
  const control = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (navOpen) {
      control.start("animate") && window.scrollTo({ top: 0 });
      document.body.style.overflowY = "hidden";
    }

    if (!navOpen) {
      control.start("initial");
      document.body.style.overflowY = "scroll";
    }
  }, [navOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) setNavOpen(() => false);
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [router.pathname]);

  return (
    <>
      <div>
        <div className="absolute lg:hidden right-0 top-0 bottom-0  w-[80%]">
          <NavOptions state={navOpen} navOptions={navOptions} />
        </div>
        <motion.div className="z-10" variants={bodyVariants} animate={control}>
          <Nav navOptions={navOptions} setState={setNavOpen} />
          {children}
        </motion.div>
      </div>
      <div className="fixed right-9 bottom-8 cursor-pointer rounded-full wShadows">
        <a
          href="https://api.whatsapp.com/send?phone=+17324293342&amp;text=Hi%21%20I am interested in Vedika Matrimonry"
          className="float"
          target="_blank"
        >
          <Image width="60" height="60" src="/whatsapp.svg" />
        </a>
      </div>
    </>
  );
};

export default Layout;
