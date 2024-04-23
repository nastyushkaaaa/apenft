import { Hero } from "./components/Hero";
import text from "./text.json";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[8px] pt-[54px]">
      <Hero text={text}></Hero>
    </main>
  );
}
