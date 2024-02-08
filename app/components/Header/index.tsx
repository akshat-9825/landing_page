"use client";

import { useState } from "react";
import Image from "next/image";
import IconChevronDown from "@/app/icons/IconChevronDown";
import { epilogueFont } from "@/app/fonts";

const options = ["Home", "About", "Services", "Contacts"];
const Header = () => {
  const [selected, setSelected] = useState<Number>(0);

  return (
    <div className="flex flex-row w-full items-center justify-center h-[98px] px-12">
      <div className="flex flex-row justify-between h-fit w-full items-center">
        <Image
          width={48}
          height={48}
          src="/Image/Logo.png"
          alt="Logo"
          className="cursor-pointer h-12 w-12"
          loading="lazy"
        />
        <div className="bg-gray-100 rounded-full flex flex-row items-center font-epilogue text-base leading-tight py-4 px-16 font-medium">
          <div className="flex flex-row w-full gap-16">
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
        <div className="flex flex-row h-full items-center gap-[14px]">
          <div className="h-full w-fit flex flex-row justify-between px-4 gap-1.5 items-center cursor-pointer">
            <p>EN</p>
            <IconChevronDown />
          </div>
          <button className="bg-blue-600 text-white font-medium rounded-full h-full py-[18px] px-[25px] hover:bg-blue-500 transition-all">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
