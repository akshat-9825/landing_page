import { empoweringCardData } from "@/app/data";
import Image from "next/image";
import EmpoweringCard from "./EmpoweringCard";

const EmpoweringPage = () => {
  return (
    <div className="w-full">
      <div className="mt-[129px] flex flex-row mx-auto max-w-[60%] gap-[18px]">
        <Image
          width={91}
          height={81}
          className="h-[81px]"
          src="/Image/EmpoweringHeaderVector.svg"
          alt="header-vector"
        />
        <div className="text-[40px] font-medium leading-[60px] text-gray-800">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </div>
      </div>
      <div className="mt-[79px] w-[88%] mx-auto flex flex-row flex-wrap justify-between mb-[123px]">
        {empoweringCardData.map((card, index) => (
          <EmpoweringCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default EmpoweringPage;
