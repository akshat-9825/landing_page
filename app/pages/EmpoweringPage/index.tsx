import Image from "next/image";

const EmpoweringPage = () => {
  return (
    <div className="w-full">
      <div className="mt-[129px] flex flex-row mx-auto max-w-[60%] gap-[18px]">
        <Image
          width={91}
          height={81}
          src="/Image/EmpoweringHeaderVector.svg"
          alt="header-vector"
        />
        <div className="text-[40px] font-medium leading-[60px] text-gray-800">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </div>
      </div>
    </div>
  );
};

export default EmpoweringPage;
