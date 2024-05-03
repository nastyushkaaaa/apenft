import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import text from "./text.json";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:justify-start px-[8px] pt-[54px]">
      <Hero text={text.hero}></Hero>
      <Main text={text.main}></Main>
    </main>
  );
}
