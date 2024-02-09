import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";

const Logos = ["samsung", "microsoft", "google", "slack", "lg", "sony"];

const OrganizationPage = () => {
  const { mobile } = useMediaQuery();

  return (
    <div className="bg-gray-100 overflow-hidden relative rounded-[36px] flex flex-col pt-[70px] sm:pt-[77px] pb-12 items-center">
      <Image
        width={91}
        height={81}
        className="absolute w-[36px] h-[32px] sm:h-[81px] sm:w-auto top-4 sm:top-[36px] left-4 sm:left-[44px]"
        src="/Image/vector-green.svg"
        alt="card-vector"
      />
      <div className="flex flex-col gap-[21px] items-center">
        <div className="text-center text-[26px] leading-[40px] sm:text-[40px] sm:leading-[60px] font-medium text-gray-800">
          Trusted by Leading Organizations
        </div>
        <div className="text-gray-700 text-xs sm:leading-6 sm:text-[20px] font-medium line-clamp-2 max-w-[60%] text-center">
          Our 4,000+ team has expertise in almost every programming language.
        </div>
      </div>
      {!mobile ? (
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
      ) : (
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {Logos.map((logo, index) => (
            <Image
              key={index}
              width={90}
              height={90}
              className="h-[90px] w-[90px]"
              src={`/Image/logo_${logo}.svg`}
              alt="logo"
            />
          ))}
        </div>
      )}
      <button className="mt-[22px] sm:mt-6 text-base leading-4 px-[29px] sm:px-[34px] py-[15px] sm:py-[18px] text-white rounded-full bg-blue-600 hover:bg-blue-500 transition-all">
        Our full repertorie
      </button>
    </div>
  );
};

export default OrganizationPage;
