import { empoweringCardData } from "@/app/data";
import Image from "next/image";
import EmpoweringCard from "./EmpoweringCard";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const EmpoweringPage = () => {
  const { mobile } = useMediaQuery();

  return (
    <div>
      <div className="mt-[35px] sm:mt-[129px] flex flex-row mx-auto max-w-[87%] sm:max-w-[60%] gap-[18px]">
        <Image
          width={91}
          height={81}
          className="w-[66px] h-[59px] translate-y-2 sm:translate-y-0 sm:h-[81px] sm:w-[91px]"
          src="/Image/vector-blue.svg"
          alt="header-vector"
        />
        <div className="text-2xl sm:text-[40px] font-medium leading-[43px] sm:leading-[60px] text-gray-800">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </div>
      </div>
      <div className="ml-4 sm:ml-0 overflow-scroll no-scrollbar">
        <div className="relative pl-2 sm:pl-0 mt-[27px] sm:mt-[79px] w-max sm:w-[87%] sm:mx-auto grid grid-cols-6 sm:grid-cols-3 gap-x-[35px] sm:gap-x-0 sm:gap-y-12 mb-[35px] sm:mb-[123px]">
          {!mobile && (
            <div className="absolute">
              <Image
                width={190}
                height={170}
                className="absolute h-[170px] -z-10 top-2/3 left-[20%] w-[190px]"
                src="/Image/vector-blue.svg"
                alt="card-vector"
              />
              <Image
                width={190}
                height={170}
                className="absolute h-[170px] -z-10 top-[30%] left-[60%] w-[190px]"
                src="/Image/vector-green.svg"
                alt="card-vector"
              />
            </div>
          )}
          {empoweringCardData.map((card, index) => (
            <EmpoweringCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpoweringPage;
