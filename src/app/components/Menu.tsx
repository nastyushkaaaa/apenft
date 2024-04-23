import Discord from "../../../public/discord.svg";
import Ship from "../../../public/ship.svg";
import Twitter from "../../../public/x.svg";
import Image from "next/image";

export const Menu = () => {
  return (
    <ul className="flex flex-col gap-[8px] xl:gap-[16px] absolute right-[8px] top-[8px] md:right-[12px] md:top-[12px] xl:right-[96px] xl:top-[24px]">
      <li className="w-[48px] h-[48px] xl:w-[80px] xl:h-[80px] bg-[var(--button-background-color)] rounded-[8px]">
        <button className="w-[48px] h-[48px] xl:w-[80px] xl:h-[80px] menu-btn text-[12px] uppercase hover:text-[#fff] hover:underline">
          Menu
        </button>
      </li>
      <li>
        <a
          href="#"
          className="icon-link w-[48px] h-[48px] xl:w-[80px] xl:h-[80px] bg-[var(--button-background-color)] rounded-[8px] flex items-center justify-center"
        >
          <Discord width={16} height={16} className="icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="icon-link w-[48px] h-[48px] xl:w-[80px] xl:h-[80px] bg-[var(--button-background-color)] rounded-[8px] flex items-center justify-center"
        >
          <Ship width={16} height={16} className="icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="icon-link w-[48px] h-[48px] xl:w-[80px] xl:h-[80px] bg-[var(--button-background-color)] rounded-[8px] flex items-center justify-center"
        >
          <Twitter width={16} height={16} className="icon" />
        </a>
      </li>
    </ul>
  );
};
