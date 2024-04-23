// Import necessary modules
import React from "react";
import { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Define local fonts
export const RightGrotesk = localFont({
  src: "./fonts/RightGrotesk-CompactBlack.otf",
  display: "swap",
  variable: "--font-RightGrotesk",
});

export const BiroScriptPlus = localFont({
  src: "./fonts/BiroScriptUSPlus-Bold.woff2",
  display: "swap",
  variable: "--font-BiroScriptPlus",
});

export const MessinaSansMono = localFont({
  src: "./fonts/MessinaSansMono-Regular.woff2",
  display: "swap",
  variable: "--font-MessinaSansMono",
});

// Define metadata
export const metadata: Metadata = {
  title: "Ape NFT",
  description: "Ape NFT",
};

// Define layout component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${RightGrotesk.variable} ${BiroScriptPlus.variable} ${MessinaSansMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
};

// Export layout component
export default RootLayout;
