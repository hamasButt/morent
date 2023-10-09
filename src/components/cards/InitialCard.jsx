import PrimaryButton from "../PrimaryButton";

const InitialCard = ({ header, card, image, subHeader }) => {
  return (
    <div
      //   style={{ background: color }}
      className={`${
        card === 2 ? "lg:flex hidden" : ""
      } rounded-xl flex flex-col lg:py-6 lg:px-7 p-4 w-full  ${
        card !== 1 ? "bg-img2" : "bg-img"
      }`}
    >
      <div className="lg:min-w-[360px] lg:max-w-[360px] min-w-[240px] max-w-[240px] flex flex-col gap-4 ">
        <h1 className="text-white lg:text-[32px] text-base font-500 leading-[150%] tracking-[-0.469px]">
          {header}
        </h1>
        <h4 className="text-white lg:text-base text-xs">{subHeader}</h4>
        <div className="lg:max-w-[130px]">
          <PrimaryButton bgColor={card === 2 && "bg-[#54A6FF]"}>
            Rental Car
          </PrimaryButton>
        </div>
      </div>
      <img
        className=" object-contain self-center max-w-[196px] max-h-[56px] lg:max-w-[406px] lg:max-h-[116px] "
        src={image}
        alt={"image-car"}
      />
    </div>
  );
};

export default InitialCard;
