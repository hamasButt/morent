import CarsInfoCard from "./cards/CarsInfoCard";
import InitialCard from "./cards/InitialCard";
import PickNDropFilters from "./filters/PickNDropFilters";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:gap-7 gap-4 ">
      <div className="flex lg:gap-12 gap-8">
        <InitialCard
          card={1}
          header={"The Best Platform for Car Rental"}
          subHeader={
            "Ease of doing a car rental safely and reliably. Of course at a low price."
          }
          image={"/img-24.png"}
        />
        <InitialCard
          card={2}
          header={"Easy way to rent a car at a low price"}
          subHeader={
            "Providing cheap car rental services and safe and comfortable facilities."
          }
          image={"/image 1.png"}
        />
      </div>
      <div className="flex lg:gap-16 gap-10 items-center">
        <PickNDropFilters head={"Pick - Up"} />
        <button className="p-7 bg-[#3563E9] max-h-[100px] rounded-[16px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
            <line x1="17" y1="3" x2="17" y2="21" />{" "}
            <path d="M10 18l-3 3l-3 -3" /> <line x1="7" y1="21" x2="7" y2="3" />{" "}
            <path d="M20 6l-3 -3l-3 3" />{" "}
          </svg>
        </button>
        <PickNDropFilters head={"Drop - Off"} />
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-[22px] text-[#90A3BF] font-500">Popular Car</p>
        <p className="text-[#3563E9] text-[22px] font-500">View All</p>
      </div>
      <div className="lg:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        <CarsInfoCard />
        <CarsInfoCard />
        <CarsInfoCard />
        <CarsInfoCard />
        <CarsInfoCard />
      </div>
    </div>
  );
};

export default HeroSection;
