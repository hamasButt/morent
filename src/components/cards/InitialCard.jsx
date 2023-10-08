const InitialCard = ({ header, card, image, subHeader }) => {
  return (
    <div
      //   style={{ background: color }}
      className={`rounded-xl flex flex-col py-6 px-7 w-full  ${
        card !== 1 ? "bg-img2" : "bg-img"
      }`}
    >
      <div className="lg:min-w-[360px] max-w-[360px] flex flex-col gap-4 ">
        <h1 className="text-white text-[42px] font-500 leading-[150%] tracking-[-0.469px]">
          {header}
        </h1>
        <h4 className="text-white text-[20px]">{subHeader}</h4>
        <button
          className="p-3 text-white lg:max-w-[130px] rounded-md font-500"
          style={{ background: card === 1 ? "#3563E9" : "#54A6FF" }}
        >
          Rental Car
        </button>
      </div>
      <img
        className=" object-contain self-center"
        src={image}
        alt={"image-car"}
      />
    </div>
  );
};

export default InitialCard;
