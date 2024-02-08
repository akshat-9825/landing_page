import { empoweringCardData } from "@/app/data";
import Image from "next/image";
import EmpoweringCard from "./EmpoweringCard";

const EmpoweringPage = () => {
  return (
    <div>
      <div className="mt-[129px] flex flex-row mx-auto max-w-[60%] gap-[18px]">
        <Image
          width={91}
          height={100}
          className="h-[81px] w-[91px]"
          src="/Image/vector-blue.svg"
          alt="header-vector"
        />
        <div className="text-[40px] font-medium leading-[60px] text-gray-800">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </div>
      </div>
      <div className="relative mt-[79px] w-[88%] mx-auto grid grid-cols-3 gap-y-12 gap-x-[calc((100% - (3 * <fixed-width>)) / 2)] mb-[123px]">
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
        {empoweringCardData.map((card, index) => (
          <EmpoweringCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default EmpoweringPage;
