"use client";
import Image from "next/image";
import { Menu } from "./Menu";
import { useEffect, useState } from "react";

type HeroText = {
  questionSpan: string;
  titleText: string;
  subtitleText: string;
  descriptionText: string;
};

export const Hero: React.FC<{ text: HeroText }> = ({ text }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[542px]  md:h-[421px] xl:h-[677px] bg-[var(--block-bg)] rounded-[12px] relative">
      <Image
        src="/logo.svg"
        alt="Логотип"
        width={48}
        height={32}
        className="main-logo absolute top-[16px] left-[8px] md:top-[20px] md:left-[12px] xl:top-[39px] xl:left-[96px]"
      />
      <Menu></Menu>
      <button className="button-spaces top-[428px] md:top-[345px] xl:top-[526px] left-1/2 md:left-auto transform -translate-x-1/2 uppercase w-[216px] md:w-[190px] xl:w-[337px] h-[41px] xl:h-[70px] text-center text-[var(--font-color-hero)] bg-[var(--button-background-color)] text-[16px] xl:text-[28px] rounded-[12px] absolute z-[10] backdrop-blur-md hover:text-[#fff]">
        Meet apes
      </button>
      <Image
        src="/hero.png"
        alt="Hero monkey"
        width={216}
        height={284}
        className="image-spaces absolute top-[148px] md:top-[35px] xl:top-[65px] z-[0] left-1/2 md:left-auto transform -translate-x-1/2 md:w-[283px] md:h-[386px] xl:w-[463px] xl:h-[612px]"
      ></Image>
      <div className="flex flex-col mt-[36px] items-center gap-[339px] md:mt-[124px] xl:mt-[197px] md:gap-[0px] md:items-end md:w-[591px] xl:w-[1019px] md:mx-auto">
        <div className="mx-auto w-[209px] flex flex-col items-center mb-[6px] md:w-full md:items-start md:mb-[0px]">
          <span className="text-[var(--font-color-hero)">
            {text.questionSpan}
          </span>
          {windowWidth < 768 ? (
            <h1 className="uppercase text-[var(--font-color-hero)]">
              {text.titleText}
            </h1>
          ) : (
            <h1 className="uppercase text-[var(--font-color-hero)] flex justify-between w-full relative z-2">
              <span className="title-span">Yacht</span>
              <span className="title-span">Apes</span>
            </h1>
          )}
          <span className="mt-[8px] md:mt-[16px] xl:mt-[30px] xl:flex xl:w-[365px] xl:justify-end">
            {text.subtitleText}
          </span>
        </div>
        <div className="w-[217px] text-center md:w-[190px] xl:w-[337px] md:text-justify md:absolute md:top-[273px] xl:top-[441px]">
          <p className="text-[var(--font-color-hero) uppercase text-[12px] xl:text-[16px] leading-[14px] xl:leading-[19px] md:indent-[75px]">
            {text.descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
};
