import { robotoFlexFont } from "@/app/fonts";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";

const TitlePage = () => {
  const { mobile } = useMediaQuery();

  return (
    <div className="flex flex-col h-[419px] sm:h-[679px] justify-center mx-auto sm:w-[93%] relative">
      <div className="max-w-[490px] w-[93%] mx-auto sm:mx-0 sm:w-auto sm:-translate-y-14">
        <div
          className={`font-semibold text-xs sm:text-lg leading-6 tracking-wider text-left text-yellow-400 ${robotoFlexFont.className} mb-5`}>
          TECH SERVICES
        </div>
        <div className="text-[40px] max-w-[60%] sm:max-w-none sm:text-5xl font-medium leading-[48px] sm:leading-[80px] text-white sm:text-gray-800">
          TechSynergy: Innovate, Create, Elevate
        </div>
        <div className="mt-[34px] text-sm sm:text-base font-medium leading-[14.35px] sm:leading-5 tracking-normal text-white sm:text-gray-700">
          Unlocking Possibilities, One Code at a Time
        </div>
        <button className="mt-12 rounded-full py-[15px] sm:py-[18px] px-[20px] sm:px-[34px] text-[13px] sm:text-base font-medium leading-[14px] sm:*:leading-[16px] text-white bg-green-500 hover:bg-green-600 transition-all">
          See projects
        </button>
      </div>
      <div className="absolute -z-10 right-0">
        <div className="relative w-fit">
          <Image
            src={`/Image/title${mobile ? "Mobile" : ""}Background.png`}
            alt="titleBackground"
            width={1102}
            height={679}
          />
          {!mobile ? (
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
