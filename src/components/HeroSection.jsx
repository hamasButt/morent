import React from "react";
import CarsInfoCard from "./cards/CarsInfoCard";
import InitialCard from "./cards/InitialCard";
import PickNDropFilters from "./filters/PickNDropFilters";
import PrimaryButton from "./PrimaryButton";
import CarsSwiper from "./Swiper";

const HeroSection = () => {
  let cars = [
    {
      src: "/car.png",
      title: "Koenigsegg",
      type: "Sport",
      filled: true,
    },
    {
      src: "/image 1.png",
      title: "Nissan GT - R",
      type: "Sport",
    },
    {
      src: "/Car (1).png",
      title: "Rolls - Royce",
      type: "Sedan",
      filled: true,
    },
    {
      src: "/image 1.png",
      title: "Nissan GT - R",
      type: "Sport",
    },
  ];
  let cars2 = [
    {
      src: "/All New Rush.png",
      title: "All New Rush",
      type: "SUV",
    },
    {
      src: "/CR - V.png",
      title: "CR  - V",
      type: "SUV",
      filled: true,
    },
    {
      src: "/All New Terios.png",
      title: "All New Terios",
      type: "SUV",
    },
    {
      src: "/CR  - VB.png",
      title: "CR  - V",
      type: "SUV",
      filled: true,
    },
    {
      src: "/MG ZX Exclusice.png",
      title: "MG ZX Exclusice",
      type: "Hatchback",
      filled: true,
    },
    {
      src: "/New MG ZS.png",
      title: "New MG ZS",
      type: "SUV",
    },
    {
      src: "/MG ZX Exclusice.png",
      title: "MG ZX Excite",
      type: "Hatchback",
      filled: true,
    },
    {
      src: "/New MG ZS2.png",
      title: "New MG ZS",
      type: "SUV",
    },
  ];
  return (
    <div className="flex flex-col gap-8 z-[10]  lg:static relative ">
      <div className="flex  lg:gap-12 gap-8">
        <InitialCard
          card={1}
          header={"The Best Platform for Car Rental"}
          subHeader={
            "Ease of doing a car rental safely and reliably. Of course at a low price."
          }
          image={"/initial1.png"}
        />
        <InitialCard
          card={2}
          header={"Easy way to rent a car at a low price"}
          subHeader={
            "Providing cheap car rental services and safe and comfortable facilities."
          }
          image={"/initial2.png"}
        />
      </div>
      <div className="flex relative  flex-col lg:flex-row lg:gap-11 gap-8 items-center">
        <PickNDropFilters
          head={"Pick - Up"}
          radio={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="16"
                height="16"
                rx="8"
                fill="#3563E9"
                fillOpacity="0.3"
              />
              <circle cx="8" cy="8" r="4" fill="#3563E9" />
            </svg>
          }
        />
        <button className="p-[18px] bg-[#3563E9] lg:block hidden  rounded-[10px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16124 3.83632L7.16124 17.4541"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.089 20.167L17.089 6.54921"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="p-[18px] bg-[#3563E9] lg:hidden absolute top-[6.4rem]  rounded-[10px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16124 3.83632L7.16124 17.4541"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.089 20.167L17.089 6.54921"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="pick-filter absolute top-[7rem] lg:hidden "></div>
        <PickNDropFilters
          head={"Drop - Off"}
          radio={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="16"
                height="16"
                rx="8"
                fill="#5CAFFC"
                fillOpacity="0.3"
              />
              <circle cx="8" cy="8" r="4" fill="#54A6FF" />
            </svg>
          }
        />
      </div>
      <div className="w-full flex justify-between items-center font-[600] py-[10px]">
        <p className="text-base text-[#90A3BF] ">Popular Car</p>
        <p className="text-[#3563E9] text-base ">View All</p>
      </div>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {cars.map((item, id) => {
          return (
            <React.Fragment key={id}>
              <CarsInfoCard item={item} />
            </React.Fragment>
          );
        })}
      </div>
      <CarsSwiper cars={cars} />
      <div className="w-full  font-[600] py-[10px]">
        <p className="text-base text-[#90A3BF] ">Recomendation Car</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {cars2.map((item, id) => {
          return (
            <React.Fragment key={id}>
              <CarsInfoCard item={{ ...item, recommended: true }} />
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className=" lg:py-16 flex justify-between items-center lg:min-w-[734px] lg:max-w-[734px] min-w-[223px] max-w-[223px]">
          <PrimaryButton>Show more car</PrimaryButton>
          <p className="text-sm font-[500] text-[#90A3BF]">120 Car</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
