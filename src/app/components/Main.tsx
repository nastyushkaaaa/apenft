import Close from "../../../public/close.svg";
import Image from "next/image";

type MainText = {
  mainTitle: string;
  titleSpan: string;
  mainDescription: string;
  additionalText: string;
};

export const Main: React.FC<{ text: MainText }> = ({ text }) => {
  return (
    <div className="px-[64px] pt-[60px] md:px-[88px] xl:px-[204px] md:pt-[80px] xl:pt-[120px] md:pb-[0px] md:w-full md:flex md:flex-row md:flex-wrap md:justify-between relative md:basis-1/2">
      <h1 className="uppercase text-[40px] text-white leading-[40px] block w-[216px] md:w-[269px] xl:w-[538px] md:text-[60px] md:leading-[60px] md:basis-1/2 xl:text-[120px] xl:leading-[120px]">
        {text.mainTitle}
        <span className="main-span text-[var(--block-bg)] text-[40px] ml-[4px] whitespace-break-spaces md:text-[60px] md:leading-[60px] md:whitespace-normal xl:text-[120px] xl:leading-[120px]">
          {text.titleSpan}
        </span>
      </h1>
      <p className="text-[16px] xl:text-[24px] leading-[19px] xl:leading-[29px] text-white mt-[16px] indent-[130px] text-right block w-[216px] md:mt-[10px] xl:mt-[15px] md:indent-[0px] md:w-[275px] md:flex md:text-right md:basis-1/2 xl:max-w-[409px] xl:basis-1/2 xl:h-[174px]">
        {text.mainDescription}
      </p>
      <div className="w-[216px] md:w-[269px] xl:w-[417px] mt-[36px] md:mt-[68px] xl:mt-[56px] flex justify-center items-center gap-[16px] md:gap-[24px] flex-col md:basis-1/2">
        <Close width={24} height={24} className="xl:size-[36px]"></Close>
        <p className="text-[12px] leading-[14px] md:text-[16px] md:leading-[19px] xl:text-[24px] xl:leading-[29px] text-white text-center">
          {text.additionalText}
        </p>
      </div>
      <Image
        src="/main.png"
        width={216}
        height={292}
        alt="Main monkey"
        className="mt-[40px] md:absolute md:mt-0 md:w-[313px] md:h-[422px] xl:w-[492px] xl:h-[662px] md:right-[88px] md:top-[205px] xl:right-[190px] xl:top-[450px]"
      ></Image>
    </div>
  );
};
