import { useState } from "react";
import Image from "next/image";
import IconChevron from "@/app/icons/IconChevron";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import IconMenu from "@/app/icons/IconMenu";

const options = ["Home", "About", "Services", "Contacts"];
const Header = () => {
  const [selected, setSelected] = useState<Number>(0);
  const { mobile } = useMediaQuery();

  return (
    <div className="flex flex-row items-center justify-center h-[92px] sm:h-[98px] px-[26px] sm:px-12">
      <div className="w-full flex flex-row justify-between h-fit items-center">
        <Image
          width={48}
          height={48}
          src="/Image/Logo.png"
          alt="Logo"
          className="cursor-pointer h-12 w-12"
          loading="lazy"
        />
        {!mobile && (
          <div className="bg-gray-100 rounded-full flex flex-row items-center font-epilogue text-base leading-tight py-4 px-16 font-medium">
            <div className="flex flex-row gap-16">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`w-fit cursor-pointer text-black ${
                    selected === index ? "text-blue-600" : ""
                  }`}
                  onClick={() => setSelected(index)}>
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
        {!mobile && (
          <div className="flex flex-row h-full items-center gap-[14px]">
            <div className="h-full w-fit flex flex-row justify-between px-4 gap-1.5 items-center cursor-pointer">
              <p>EN</p>
              <IconChevron height={16} width={16} direction="down" />
            </div>
            <button className="bg-blue-600 text-white font-medium rounded-full h-full py-[18px] px-[25px] hover:bg-blue-500 transition-all">
              Schedule a Call
            </button>
          </div>
        )}
        {mobile && <IconMenu height={24} width={24} />}
      </div>
    </div>
  );
};

export default Header;
