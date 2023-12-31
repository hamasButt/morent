import React from "react";

const PickNDropFilters = ({ head, radio }) => {
  return (
    <div className="lg:px-12 lg:py-7 p-4 overflow-hidden bg-white w-full flex flex-col  gap-1 items-start justify-start rounded-[20px] ">
      <div>
        <span className="font-[600] text-[22px] tracking-[-0.235px] text-black flex gap-2 items-center">
          {radio}
          {head}
        </span>
      </div>
      <div className="flex gap-6 w-full">
        <div className="flex flex-col border-zinc-300 w-full">
          <span className="font-[600] text-[20px] tracking-[-0.235px] text-black">
            Locations
          </span>
          <span className="flex items-center gap-2 ">
            <p className="text-base lg:hidden  tracking-[-0.24px] !leading-none text-[#90A3BF] font-[500]">
              Semarang
            </p>
            <p className="text-xs lg:block hidden  tracking-[-0.24px] !leading-none text-[#90A3BF] font-[500]">
              Select your city
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
        <hr className="h-[48px] w-[1px] bg-[#C3D4E966]" />
        <div className="flex flex-col border-zinc-300 w-full">
          <span className="font-[600] text-[20px] tracking-[-0.235px] text-black">
            Date
          </span>
          <span className="flex items-center gap-2 ">
            <p className="text-base lg:hidden  tracking-[-0.24px] !leading-none text-[#90A3BF] font-[500]">
              Semarang
            </p>
            <p className="text-xs lg:block hidden  tracking-[-0.24px] !leading-none text-[#90A3BF] font-[500]">
              21 July 2022
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
        <hr className="h-[48px] w-[1px] bg-[#C3D4E966]" />
        <div className="flex flex-col border-zinc-300 w-full">
          <span className="font-[600] text-[20px] tracking-[-0.235px] text-black">
            Time
          </span>
          <span className="flex items-center gap-2 ">
            <p className="text-base lg:hidden  tracking-[-0.24px] !leading-none text-[#90A3BF] font-[500]">
              07.00
            </p>
            <p className="text-xs xl:block hidden  tracking-[-0.24px] !leading-none text-[#90A3BF] font-[500]">
              Select your time
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
