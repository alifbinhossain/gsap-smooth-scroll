import { Kaushan_Script as Primary } from "next/font/google";
import { Sirin_Stencil as Secondary } from "next/font/google";

export const fontPrimary = Primary({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: "400",
});

export const fontSecondary = Secondary({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: "400",
});
