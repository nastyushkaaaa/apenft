import { Metadata } from "next";
import "./globals.css";
import { RightGroteskFont } from "./fonts";
import { BiroScriptPlusFont } from "./fonts";
import { MessinaSansMonoFont } from "./fonts";

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
