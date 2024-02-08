import Image from "next/image";

interface EmpoweringCardsProps {
  image: string;
  heading: string;
  subtext: string;
}

const EmpoweringCard = (props: EmpoweringCardsProps) => {
  return (
    <div className="w-[385px] h-[321px] pt-7 pb-[38px] px-7 flex flex-col justify-between">
      <Image width={50} height={50} alt="card-image" src={props.image} />
      <div className="flex flex-col gap-[19px]">
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

export default EmpoweringCard;
