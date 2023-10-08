import React from "react";

const PickNDropFilters = ({head}) => {
  return (
    <div className="lg:px-14 lg:py-10 p-10 bg-white w-full flex flex-col  gap-1 items-start justify-start rounded-[20px] ">
      <div>
        <span className="font-[600] text-[22px] tracking-[-0.235px] text-black">
          {head}
        </span>
      </div>
      <div className="flex">
        <div className="flex flex-col border-zinc-300 border-r-2">
          <span className="font-[600] text-[22px] tracking-[-0.235px] text-black">
            Locations
          </span>
          <span className="flex items-center gap-7 pr-4">
            <p className="text-base tracking-[-0.176px] text-black">
              Select your city
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.8411 6.52024C23.8411 6.2842 23.751 6.04816 23.5711 5.86823C23.2112 5.50811 22.6272 5.50811 22.2673 5.86823L11.9864 16.1489L1.70574 5.86823C1.34562 5.50811 0.761847 5.50811 0.401728 5.86823C0.041872 6.22835 0.041872 6.81213 0.401728 7.17225L11.3344 18.1049C11.6942 18.465 12.2783 18.465 12.6381 18.1049L23.5708 7.17225C23.751 6.99232 23.8411 6.75628 23.8411 6.52024Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col border-zinc-300 border-r-2 pl-7">
          <span className="font-[600] text-[22px] tracking-[-0.235px] text-black">
            Date
          </span>
          <span className="flex items-center gap-7 pr-4">
            <p className="text-base tracking-[-0.176px] text-black">
              Select your date
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.8411 6.52024C23.8411 6.2842 23.751 6.04816 23.5711 5.86823C23.2112 5.50811 22.6272 5.50811 22.2673 5.86823L11.9864 16.1489L1.70574 5.86823C1.34562 5.50811 0.761847 5.50811 0.401728 5.86823C0.041872 6.22835 0.041872 6.81213 0.401728 7.17225L11.3344 18.1049C11.6942 18.465 12.2783 18.465 12.6381 18.1049L23.5708 7.17225C23.751 6.99232 23.8411 6.75628 23.8411 6.52024Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col  pl-7">
          <span className="font-[600] text-[22px] tracking-[-0.235px] text-black">
            Time
          </span>
          <span className="flex items-center gap-7 pr-4">
            <p className="text-base tracking-[-0.176px] text-black">
              Select your time
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.8411 6.52024C23.8411 6.2842 23.751 6.04816 23.5711 5.86823C23.2112 5.50811 22.6272 5.50811 22.2673 5.86823L11.9864 16.1489L1.70574 5.86823C1.34562 5.50811 0.761847 5.50811 0.401728 5.86823C0.041872 6.22835 0.041872 6.81213 0.401728 7.17225L11.3344 18.1049C11.6942 18.465 12.2783 18.465 12.6381 18.1049L23.5708 7.17225C23.751 6.99232 23.8411 6.75628 23.8411 6.52024Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PickNDropFilters;
