import { Kaushan_Script as Primary } from "next/font/google";
import { Sirin_Stencil as Secondary } from "next/font/google";

export const fontPrimary = Primary({
  variable: "--font-primary",
  weight: "400",
  subsets: ["latin"],
});

export const fontSecondary = Secondary({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: "400",
});
