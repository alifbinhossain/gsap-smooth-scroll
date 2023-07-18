"use client";

import React from "react";
import { motion } from "framer-motion";
import { curve, linkContainer, linkItem, menuDrawer } from "@/vendors/variants";
import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "#",
  },

  {
    label: "About Us",
    href: "#",
  },

  {
    label: "Blog",
    href: "#",
  },

  {
    label: "Contact Us",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <motion.div
      variants={menuDrawer}
      initial='init'
      animate='enter'
      exit='exit'
      className='fixed top-0 right-0 bg-gray-300 z-20  h-screen'
    >
      <motion.ul
        variants={linkContainer}
        className='w-[30vw] h-full p-20 flex flex-col gap-6'
      >
        {links.map((link, index) => (
          <motion.li variants={linkItem} key={index}>
            <Link
              className='text-3xl font-secondary tracking-wide text-gray-800'
              href={link.href}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <svg className='absolute top-0 left-[-99px] z-[9999] w-[100px] h-full fill-gray-300 stroke-none'>
        <motion.path
          variants={curve}
          initial='init'
          animate='enter'
          exit='exit'
        ></motion.path>
      </svg>
    </motion.div>
  );
};

export default Navbar;
