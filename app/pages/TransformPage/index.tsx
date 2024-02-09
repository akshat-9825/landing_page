import Image from "next/image";

const TransformPage = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center pt-[109px] mx-auto w-[93%] h-[632px] bg-gradient-custom rounded-[35px] opacity-80">
        <div className="text-[32px] leading-[48px] sm:text-5xl font-bold sm:leading-[68px] text-center text-white max-w-[80%] sm:max-w-[67%]">
          Ready to Transform Your Vision into Reality? Let&apos;s Get Started!
        </div>
        <button className="mt-[42px] sm:mt-[33px] rounded-full py-[18px] px-[25px] text-base font-bold leading-4 bg-white text-blue-600 hover:bg-slate-100 transition-all">
          Schedule a Call
        </button>
      </div>
      <Image
        src="/Image/transformBackground.png"
        alt="transformBackground"
        className="absolute left-1/2 -translate-x-1/2 bottom-[-134px] sm:bottom-[-166px] h-[202px] w-[355px] sm:w-[770px] sm:h-[409px]"
        width={770}
        height={409}
      />
    </div>
  );
};

export default TransformPage;
