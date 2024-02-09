import { robotoFlexFont } from "@/app/fonts";
import Image from "next/image";

const TitlePage = () => {
  return (
    <div className="flex flex-col h-[679px] justify-center w-[93%] mx-auto relative">
      <div className="max-w-[490px] -translate-y-14">
        <div
          className={`font-semibold text-lg leading-6 tracking-wider text-left text-yellow-400 ${robotoFlexFont.className} mb-5`}>
          TECH SERVICES
        </div>
        <div className="text-5xl font-medium leading-[80px] text-gray-800">
          TechSynergy: Innovate, Create, Elevate
        </div>
        <div className="mt-[34px] text-base font-medium leading-5 tracking-normal text-gray-700">
          Unlocking Possibilities, One Code at a Time
        </div>
        <button className="mt-12 rounded-full py-[18px] px-[34px] text-base font-medium leading-16 text-white bg-green-500 hover:bg-green-600 transition-all">
          See projects
        </button>
      </div>
      <div className="absolute -z-10 right-0">
        <div className="relative w-fit">
          <Image
            src="/Image/titleBackground.png"
            alt="titleBackground"
            width={1102}
            height={679}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
