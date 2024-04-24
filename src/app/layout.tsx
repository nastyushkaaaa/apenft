import { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { RightGroteskFont } from "./fonts";
import { BiroScriptPlusFont } from "./fonts";
import { MessinaSansMonoFont } from "./fonts";

// export const RightGroteskFont = localFont({
//   src: "./RightGrotesk-CompactBlack.woff2",
//   display: "swap",
//   variable: "--font-RightGrotesk",
// });

// export const BiroScriptPlusFont = localFont({
//   src: "./BiroScriptUSPlus-Bold.woff2",
//   display: "swap",
//   variable: "--font-BiroScriptPlus",
// });

// export const MessinaSansMonoFont = localFont({
//   src: "./MessinaSansMono-Regular.woff2",
//   display: "swap",
//   variable: "--font-MessinaSansMono",
// });

export const metadata: Metadata = {
  title: "Ape NFT",
  description: "Ape NFT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${RightGroteskFont.variable} ${BiroScriptPlusFont.variable} ${MessinaSansMonoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
