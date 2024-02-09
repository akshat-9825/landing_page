import Image from "next/image";

const Logos = ["samsung", "microsoft", "google", "slack", "lg", "sony"];

const OrganizationPage = () => {
  return (
    <div className="bg-gray-100 overflow-hidden relative rounded-[36px] flex flex-col pt-[77px] pb-12 items-center">
      <Image
        width={91}
        height={81}
        className="absolute h-[81px] top-[36px] left-[44px]"
        src="/Image/vector-green.svg"
        alt="card-vector"
      />
      <div className="flex flex-col gap-[21px] items-center">
        <div className="text-[40px] leading-[60px] font-medium text-gray-800">
          Trusted by Leading Organizations
        </div>
        <div className="text-gray-700 leading-6 text-[20px] font-medium line-clamp-2 max-w-[60%] text-center">
          Our 4,000+ team has expertise in almost every programming language.
        </div>
      </div>
      <div className="mt-10 flex flex-row overflow-x-hidden justify-between">
        <div className="flex flex-row animate-marquee">
          {Logos.map((logo, index) => (
            <Image
              key={index}
              width={120}
              height={120}
              className="h-[120px] w-[120px] ml-[102px]"
              src={`/Image/logo_${logo}.svg`}
              alt="logo"
            />
          ))}
        </div>
        <div className="flex flex-row animate-marquee2">
          {Logos.map((logo, index) => (
            <Image
              key={index}
              width={120}
              height={120}
              className="h-[120px] w-[120px] ml-[102px]"
              src={`/Image/logo_${logo}.svg`}
              alt="logo"
            />
          ))}
        </div>
      </div>
      <button className="mt-6 w-214 px-[34px] py-[18px] text-white rounded-full bg-blue-600 hover:bg-blue-500 transition-all">
        Our full repertorie
      </button>
    </div>
  );
};

export default OrganizationPage;
