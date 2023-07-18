import { Variants } from "framer-motion";

export const menuDrawer: Variants = {
  init: {
    x: "calc(100% + 100px)",
  },

  enter: {
    x: 0,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 0.8,
    },
  },

  exit: {
    x: "calc(100% + 100px)",
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 0.8,
      delay: 0.7,
    },
  },
};

export const linkContainer: Variants = {
  enter: {
    transition: {
      staggerChildren: 0.2,
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const linkItem: Variants = {
  init: {
    y: 20,
    opacity: 0,
  },

  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
  window.innerHeight
} Q0 ${window.innerHeight / 2} 100 0`;
const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
  window.innerHeight
} Q100 ${window.innerHeight / 2} 100 0`;

export const curve: Variants = {
  init: {
    d: initialPath,
  },
  enter: {
    d: targetPath,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    d: initialPath,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};
