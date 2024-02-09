import { challengeCardData } from "@/app/data";
import ChallengeCard from "./ChallengeCard";

const ChallengePage = () => {
  return (
    <div className="w-[94%] mx-auto flex flex-col items-center">
      <div className="max-w-[65%] sm:max-w-none mr-auto sm:mr-0 mt-[72.5px] font-medium text-2xl sm:text-4xl leading-[43px] sm:leading-[60px] bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent">
        We have multidisciplinary teams to meet any{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">
          challenge
        </span>
      </div>
      <div className="w-full shadow-3xl rounded-[35px] mt-11 mb-[72.5px] pl-[32px] sm:pl-[66.5px] pr-[23px] sm:pr-[65.5px] py-[34px] sm:py-[32.5px] flex flex-col sm:flex-row justify-between gap-[17px]">
        {challengeCardData.map((card, index) => (
          <ChallengeCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ChallengePage;
