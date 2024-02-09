import { footerData } from "@/app/data";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import IconArrowRight from "@/app/icons/IconArrowRight";
import IconFacebook from "@/app/icons/IconFacebook";
import IconLinkedin from "@/app/icons/IconLinkedIn";
import IconTwitter from "@/app/icons/IconTwitter";
import Image from "next/image";

const Footer = () => {
  const { mobile } = useMediaQuery();

  const SocialMediaHandles = () => {
    return (
      <div className="flex flex-row gap-4">
        <div className="border rounded-full flex items-center justify-center border-gray-300 w-[38px] h-[36px] cursor-pointer">
          <IconLinkedin height={14} width={14} />
        </div>
        <div className="border rounded-full flex items-center justify-center border-gray-300 w-[38px] h-[36px] cursor-pointer">
          <IconFacebook height={14} width={14} />
        </div>
        <div className="border rounded-full flex items-center justify-center border-gray-300 w-[38px] h-[36px] cursor-pointer">
          <IconTwitter height={14} width={14} />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-auto w-[81.5%]">
      <div className="grid grid-cols-2 grid-rows-3 sm:grid-rows-1 gap-y-[24px] sm:grid-cols-9 border-b-2 border-gray-200 pb-[49px] sm:pb-[54px]">
        <div className="h-fit flex flex-col gap-4 col-span-1 sm:col-span-2 sm:mt-8 leading-6 font-normal text-[16px]">
          <div>{footerData[1].heading}</div>
          {footerData[1].items.map((item, index) => (
            <div key={index} className="text-gray-600 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
        <div className="h-fit flex flex-col gap-4 col-span-1 sm:col-span-2 sm:mt-8 leading-6 font-normal text-[16px]">
          <div>{footerData[2].heading}</div>
          {footerData[2].items.map((item, index) => (
            <div key={index} className="text-gray-600 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
        <div className="h-fit flex flex-col gap-4 col-span-2 sm:col-span-2 sm:mt-8 leading-6 font-normal text-[16px]">
          <div>{footerData[0].heading}</div>
          {footerData[0].items.map((item, index) => (
            <div key={index} className="text-gray-600 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
        <div className="col-span-2 mt-[24px] sm:mt-0 sm:col-span-3">
          <div className="bg-gray-100 py-8 px-[45px] h-[261px] rounded-[30px]">
            Subscribe
            <div className="relative mt-[15px]">
              <div
                className="custom-input whitespace-nowrap overflow-hidden rounded-full bg-white h-[51px] border border-gray-300 border-opacity-100 text-sm px-[24px] py-[14.6px]"
                data-placeholder="Email Address"
                contentEditable
              />
              <button className="absolute top-0 bg-blue-500 hover:bg-blue-600 transition-all rounded-full right-0 h-[50px] w-[54px] flex items-center justify-center">
                <IconArrowRight
                  color="white"
                  className="active:scale-[0.8]"
                  height={18}
                  width={18}
                />
              </button>
            </div>
            <div className="mt-[20.25px] text-xs text-gray-500 leading-5 max-w-[95%]">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </div>
          </div>
        </div>
      </div>
      {mobile ? (
        <div className="mt-[49px]">
          <SocialMediaHandles />
        </div>
      ) : null}
      <div className="mt-[21px] sm:mt-8 flex flex-row justify-between items-center">
        <Image
          width={47}
          height={47}
          src="/Image/Logo.png"
          alt="Logo"
          className="cursor-pointer h-[47px] w-[47px]"
          loading="lazy"
        />
        <div className="flex flex-row gap-[43px] text-sm">
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Conditions</p>
        </div>
        {!mobile ? <SocialMediaHandles /> : null}
      </div>
    </div>
  );
};

export default Footer;
