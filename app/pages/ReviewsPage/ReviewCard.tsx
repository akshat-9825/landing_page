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
    <div className="bg-white border border-gray-200 rounded-[21.66px] shadow-1.5xl w-1/3 max-w-[400px] h-[527px] p-[34.65px] flex flex-col pb-[23.2px] hover:scale-[1.01] transition-all cursor-pointer">
      <div
        className={`text-[26px] leading-[27.5px] font-bold tracking-wider ${dmSansFont.className}`}>
        ⭐⭐️⭐️⭐️⭐️️
      </div>
      <div className="mt-[35px] flex flex-col gap-2 border-b border-gray-300 pb-[35px]">
        <div className={`text-2xl leading-9 font-bold ${dmSansFont.className}`}>
          &quot;{props.heading}&quot;
        </div>
        <div
          className={`font-normal text-[17.32px] leading-[30.32px] text-gray-700
            ${dmSansFont.className} line-clamp-7`}>
          {props.subtext}
        </div>
      </div>
      <div className="flex flex-row mt-[18.17px] items-center gap-4">
        <Image
          width={33}
          height={33}
          src={`/Image/review-icon-${props.id}.svg`}
          alt="review-icon"
        />
        <div className="gap-[2px] flex flex-col">
          <div className={`${dmSansFont.className} font-bold text-xl`}>
            {props.name}
          </div>
          <div
            className={`${dmSansFont.className} font-bold text-[13px] leading-[27.32px] text-gray-600`}>
            {props.designation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
