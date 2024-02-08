import Image from "next/image";

interface ChallengeCardDataType {
  image: string;
  heading: string;
  subtext: string;
}
const ChallengeCard = (props: ChallengeCardDataType) => {
  return (
    <div className="min-w-[329px] max-w-[344px] flex flex-col gap-[35px]">
      <Image width={50} height={50} src={props.image} alt="challenge_icon" />
      <div className="flex flex-col gap-2">
        <div className="text-[28px] font-medium leading-[40px] text-gray-800">
          {props.heading}
        </div>
        <div className="text-gray-700 leading-6 line-clamp-3">
          {props.subtext}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
