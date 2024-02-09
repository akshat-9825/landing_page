import Image from "next/image";

interface ChallengeCardDataType {
  image: string;
  heading: string;
  subtext: string;
}
const ChallengeCard = (props: ChallengeCardDataType) => {
  return (
    <div className="w-fit sm:min-w-[329px] sm:max-w-[344px] flex flex-col gap-4 sm:gap-[35px] hover:scale-[1.02] transition-all cursor-pointer">
      <Image
        width={50}
        height={50}
        src={props.image}
        className="w-[36.5px] h-[36.5px] sm:w-[50px] sm:h-[50px]"
        alt="challenge_icon"
      />
      <div className="flex flex-col gap-2">
        <div className="text-[20px] sm:text-[28px] font-medium leading-[40px] text-gray-800">
          {props.heading}
        </div>
        <div className="text-xs sm:text-sm text-gray-700 leading-6 line-clamp-3">
          {props.subtext}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
