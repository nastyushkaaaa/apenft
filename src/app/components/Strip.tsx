import Close from "../../../public/close.svg";

export const Strip = () => {
  return (
    <div className="w-[957px] h-[52px] md:w-[1280px] xl:w-[1600px] xl:h-[86px] absolute top-[1469px] xl:top-[1805px] md:top-[1102px] left-[0] flex flex-row gap-[24px] justify-center items-center bg-[var(--block-bg)] text-center">
      <p className="strip-text self-center">Destroy stereotypes</p>
      <Close width={36} height={36} className="xl:size-[36px]"></Close>
      <p className="strip-text self-center">Have no limits</p>
      <Close width={36} height={36} className="xl:size-[36px]"></Close>
      <p className="strip-text self-center">Break rules</p>
    </div>
  );
};
