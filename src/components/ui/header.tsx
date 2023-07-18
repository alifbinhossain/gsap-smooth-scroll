"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

import Navbar from "./navbar";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setActive((prev) => !prev);
        }}
        className='fixed right-8 z-30 mt-8 bg-white h-16 w-16 rounded-full'
      >
        <span
          className={clsx("burger-menu", active && "burger-menu-active")}
        ></span>
      </button>

      <AnimatePresence mode='wait'>{active && <Navbar />}</AnimatePresence>
    </div>
  );
};

export default Header;
