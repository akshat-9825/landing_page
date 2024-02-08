import { challengeCardData } from "@/app/data";
import ChallengeCard from "./ChallengeCard";

const ChallengePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-[72.5px] font-medium text-4xl leading-60 bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent">
        We have multidisciplinary teams to meet any{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">
          challenge
        </span>
      </div>
      <div className="w-[94%] shadow-custom rounded-[35px] mt-11 mb-[72.5px] pl-[66.5px] pr-[65.5px] py-[32.5px] flex flex-row justify-between">
        {challengeCardData.map((card, index) => (
          <ChallengeCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ChallengePage;
