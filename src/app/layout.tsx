import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "Ape NFT",
  description: "Ape NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${RightGrotesk.variable} ${BiroScriptPlus.variable} ${MessinaSansMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
