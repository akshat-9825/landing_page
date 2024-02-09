import Image from "next/image";

interface EmpoweringCardsProps {
  image: string;
  heading: string;
  subtext: string;
}

const EmpoweringCard = (props: EmpoweringCardsProps) => {
  return (
    <div className="bg-white w-[220px] sm:w-[385px] h-[285px] sm:h-[321px] p-[22px] sm:py-7 sm:px-7 flex flex-col gap-[23px] sm:justify-between shadow-3xl rounded-[35px] cursor-pointer hover:scale-[1.02] transition-all">
      <Image
        width={50}
        height={50}
        alt="card-image"
        src={props.image}
        className="h-[36px] w-[36px] sm:h-[50px] sm:w-[50px]"
      />
      <div className="flex flex-col gap-[13px] sm:gap-[19px]">
        <div className="text-[20px] leading-[29.18px] sm:text-[28px] font-medium sm:leading-[40px] text-gray-800">
          {props.heading}
        </div>
        <div className="text-[11px] leading-[17.5px] sm:text-base text-gray-700 sm:leading-6 sm:line-clamp-3">
          {props.subtext}
        </div>
      </div>
    </div>
  );
};

export default EmpoweringCard;
