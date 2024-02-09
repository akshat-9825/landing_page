import { dmSansFont } from "@/app/fonts";
import Image from "next/image";

interface ReviewCardProps {
  heading: string;
  id: number;
  subtext: string;
  name: string;
  designation: string;
}
const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] sm:rounded-[21.66px] shadow-1.5xl min-w-[260px] max-w-[275px] flex-shrink-0 sm:min-w-1/3 sm:max-w-[400px] h-[346px] sm:h-[527px] p-[22px] sm:p-[34.65px] flex flex-col pb-[23.2px] hover:scale-[1.01] transition-all cursor-pointer">
      <div
        className={`text-[17px] sm:text-[26px] leading-[18px] sm:leading-[27.5px] font-bold tracking-wider ${dmSansFont.className}`}>
        ⭐⭐️⭐️⭐️⭐️️
      </div>
      <div className="mt-[23px] sm:mt-[35px] flex flex-col gap-2 border-b border-gray-300 pb-[14px] sm:pb-[35px]">
        <div
          className={`text-base sm:text-2xl sm:leading-9 font-bold ${dmSansFont.className}`}>
          &quot;{props.heading}&quot;
        </div>
        <div
          className={`font-normal text-[11.4px] sm:text-[17.32px] leading-[20px] sm:leading-[30.32px] text-gray-700
            ${dmSansFont.className} line-clamp-7`}>
          {props.subtext}
        </div>
      </div>
      <div className="flex flex-row mt-[18.17px] items-center gap-4">
        <Image
          width={33}
          height={33}
          src={`/Image/review-icon-${props.id}.svg`}
          className="w-[21px] h-[21px] sm:w-[33px] sm:h-[33px]"
          alt="review-icon"
        />
        <div className="gap-[2px] flex flex-col">
          <div
            className={`${dmSansFont.className} font-bold text-[13px] leading-[18px] sm:text-xl`}>
            {props.name}
          </div>
          <div
            className={`${dmSansFont.className} font-bold text-[9px] leading-[18px] sm:text-[13px] sm:leading-[27.32px] text-gray-600`}>
            {props.designation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
