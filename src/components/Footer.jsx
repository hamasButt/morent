import React from "react";

const Footer = () => {
  return (
    <div className="lg:bg-white lg:px-[60px] px-6 lg:pt-20 pt-12 pb-[76px] pb-6 ">
      <div className="flex lg:flex-row flex-col justify-between items-center ">
        <div className="flex flex-col  gap-4 lg:max-w-[390px] max-w-[216px] self-start">
          <img
            src="/Logo.png"
            className="lg:max-w-[148px] max-w-[108px]"
            alt="Logo"
          />
          <p className="text-xs lg:text-base  text-black">
            {" "}
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className=" gap-[60px] items-center flex lg:flex-nowrap pt-12 lg:pt-0  flex-wrap">
          <div className="flex flex-col gap-8 lg:max-w-[152px] lg:min-w-[152px]">
            <span className="lg:text-[20px] font-[600] text-black">About</span>
            <div className="flex flex-col gap-6">
              <span className="lg:text-base  text-[#90A3BF]">How It Works</span>
              <span className="lg:text-base  text-[#90A3BF]">Featured</span>
              <span className="lg:text-base  text-[#90A3BF]">Partnership</span>
              <span className="lg:text-base  text-[#90A3BF]">
                Business Relation
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[152px] lg:min-w-[152px]">
            <span className="lg:text-[20px] font-[600] text-black">
              Community
            </span>
            <div className="flex flex-col gap-6">
              <span className="lg:text-base  text-[#90A3BF]">Events</span>
              <span className="lg:text-base  text-[#90A3BF]">Blog</span>
              <span className="lg:text-base  text-[#90A3BF]">Podcast</span>
              <span className="lg:text-base  text-[#90A3BF]">
                Invite a Friend
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[152px] lg:min-w-[152px]">
            <span className="lg:text-[20px] font-[600] text-black">
              Socials
            </span>
            <div className="flex flex-col gap-6">
              <span className="lg:text-base  text-[#90A3BF]">Discord</span>
              <span className="lg:text-base  text-[#90A3BF]">Instagram</span>
              <span className="lg:text-base  text-[#90A3BF]">Twitter</span>
              <span className="lg:text-base  text-[#90A3BF]">Facebook </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-[#13131329] my-[36px] hidden lg:block" />
      <div className="lg:flex justify-between items-center  hidden ">
        <p className="text-base leading-[150%] font-[600] ">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="flex gap-[60px] items-center">
          <p className="text-base  leading-[150%] font-[600]">
            Privacy & Policy
          </p>
          <p className="text-base  leading-[150%] font-[600]">
            Terms & Condition
          </p>
        </div>
      </div>

      <div className="flex lg:hidden mt-12 mb-8 justify-between items-center">
        <p className="text-xs  leading-[150%] font-[600]">Privacy & Policy</p>
        <p className="text-xs  leading-[150%] font-[600]">Terms & Condition</p>
      </div>
      <p className="text-xs lg:hidden leading-[150%] font-[600] ">
        ©2022 MORENT. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
