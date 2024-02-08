import { reviewCardData } from "@/app/data";
import { dmSansFont } from "@/app/fonts";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import IconChevron from "@/app/icons/IconChevron";

const ReviewsPage = () => {
  return (
    <div className="relative flex flex-col">
      <Image
        alt="reviews-page-background"
        src="/Image/ReviewsBackground.png"
        width={709}
        height={675}
        className="absolute left-16 h-[675px] w-[708.93px] -z-10"
      />
      <div className="ml-auto mr-16 w-1/2 max-w-[553px]">
        <div className="font-medium text-[40px] leading-[54px] text-gray-800">
          We&apos;ve stopped counting. Over 500 brands count on us.
        </div>
        <div className="text-[20px] font-medium leading-[25px] mt-[38px] text-gray-700">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </div>
      </div>
      <div className="mt-[91px] py-10 px-[49.5px] w-full gap-[39px] flex flex-row overflow-x-hidden">
        {reviewCardData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <div className="mx-auto flex flex-row gap-[18px] mt-20">
        <div className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-gray-100 cursor-pointer">
          <IconChevron
            height={32}
            width={32}
            direction="left"
            className="hover:scale-[1.2] transition-all -translate-x-0.5 active:scale-[0.9]"
          />
        </div>
        <div className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-gray-100 cursor-pointer">
          <IconChevron
            height={32}
            width={32}
            direction="right"
            className="hover:scale-[1.2] transition-all translate-x-0.5 active:scale-[0.9]"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
