import React from "react";

const PrimaryButton = ({ children, bgColor }) => {
  let bg = bgColor || "bg-[#3563E9]";
  return (
    <button
      className={`${bg} px-5 py-[10px] text-white lg:text-base text-xs  leading-[150%] font-[600]  rounded-md`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
