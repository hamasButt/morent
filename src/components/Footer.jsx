import React from "react";

const Footer = () => {
  return (
    <div className="bg-white lg:pl-[80px] lg:pr-[122px] lg:pt-[112px] pb-[76px] lg:mt-[112px]">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col  gap-6 max-w-[390px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="174"
            height="33"
            viewBox="0 0 174 33"
            fill="none"
          >
            <path
              d="M0 32.2986V0.512002H5.54665L17.4506 16.6813H14.8053L26.4533 0.510667H31.9999V32.2973H26.1546V7.12399L28.4159 7.67865L16.3413 23.7653H15.6586L3.88266 7.67998L5.80265 7.12532V32.2986H0ZM52.4625 32.8106C50.1292 32.8106 47.9532 32.3973 45.9346 31.5733C43.9612 30.779 42.1631 29.6048 40.6426 28.1173C39.1314 26.6321 37.9284 24.8632 37.1026 22.9119C36.2759 20.8919 35.8652 18.716 35.8652 16.384C35.8652 14.0226 36.2772 11.8466 37.1026 9.85598C37.9031 7.90121 39.0935 6.13006 40.6012 4.65066C42.1159 3.16693 43.9157 2.00576 45.8919 1.23733C47.9105 0.410668 50.1012 1.70396e-07 52.4625 1.70396e-07C54.8225 1.70396e-07 57.0132 0.412001 59.0332 1.23733C61.0061 2.03169 62.8037 3.20592 64.3238 4.69332C65.8361 6.15161 67.0273 7.90955 67.8212 9.85464C68.6745 11.8453 69.1012 14.0213 69.1012 16.3826C69.1012 18.7146 68.6745 20.8893 67.8212 22.9106C66.9949 24.8619 65.7915 26.6309 64.2798 28.1159C62.7597 29.6033 60.9621 30.7776 58.9892 31.5719C56.9972 32.3959 54.8212 32.8093 52.4612 32.8093L52.4625 32.8106ZM52.4625 27.5199C54.0265 27.5199 55.4625 27.2493 56.7705 26.7093C58.0516 26.1592 59.2115 25.3618 60.1839 24.3626C61.1849 23.3594 61.9568 22.1512 62.4465 20.8213C62.9865 19.456 63.2572 17.976 63.2572 16.384C63.2572 14.7906 62.9865 13.3253 62.4465 11.9893C61.9572 10.6595 61.1858 9.45134 60.1852 8.44798C59.2281 7.43087 58.0642 6.63068 56.7719 6.10132C55.4625 5.55999 54.0252 5.29066 52.4625 5.29066C50.9265 5.29066 49.5025 5.55999 48.1959 6.10132C46.8945 6.63697 45.7178 7.43592 44.7399 8.44798C43.7582 9.46633 42.9894 10.6703 42.4786 11.9893C41.9372 13.3253 41.6679 14.7893 41.6679 16.384C41.6679 17.976 41.9372 19.456 42.4786 20.8213C42.9894 22.1403 43.7582 23.3443 44.7399 24.3626C45.7327 25.3559 46.905 26.1517 48.1945 26.7079C49.5039 27.2479 50.9265 27.5186 52.4612 27.5186L52.4625 27.5199ZM72.9812 32.2986V0.512002H84.7998C86.9624 0.512002 88.8664 0.909335 90.5171 1.70667C92.1958 2.47466 93.5038 3.61199 94.4424 5.11999C95.3811 6.59865 95.8504 8.40531 95.8504 10.5386C95.8504 12.728 95.3251 14.592 94.2718 16.128C93.2478 17.664 91.8544 18.8013 90.0904 19.5413L97.3864 32.2986H90.8158L83.0078 18.3466L86.7625 20.5653H78.7838V32.2986H72.9812ZM78.7838 15.4453H84.8851C85.9385 15.4453 86.8478 15.2453 87.6158 14.848C88.3838 14.4213 88.9811 13.8373 89.4078 13.0986C89.8344 12.3586 90.0478 11.5053 90.0478 10.5386C90.0478 9.54264 89.8344 8.68931 89.4078 7.97865C88.9897 7.24718 88.3668 6.65395 87.6158 6.27199C86.8478 5.84532 85.9385 5.63199 84.8851 5.63199H78.7838V15.4453ZM99.9104 32.2986V0.512002H121.03V5.63199H105.713V13.7813H120.177V18.9013H105.713V27.1786H121.03V32.2986H99.9104ZM124.005 32.2986V0.512002H128.528L146.021 24.0639L143.674 24.5333V0.512002H149.477V32.2986H144.912L127.674 8.57465L129.808 8.10532V32.2973L124.005 32.2986ZM159.981 32.2986V5.63199H151.746V0.512002H173.933V5.63199H165.826V32.2986H159.981Z"
              fill="#3563E9"
            />
          </svg>
          <p className="text-[21px] text-black">
            {" "}
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex gap-32 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-[26px] font-[600] text-black">About</span>
            <div className="flex flex-col gap-6">
              <span className="text-[22px]  text-[#90A3BF]">How It Works</span>
              <span className="text-[22px]  text-[#90A3BF]">Featured</span>
              <span className="text-[22px]  text-[#90A3BF]">Partnership</span>
              <span className="text-[22px]  text-[#90A3BF]">
                Business Relation
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-[26px] font-[600] text-black">Community</span>
            <div className="flex flex-col gap-6">
              <span className="text-[22px]  text-[#90A3BF]">Events</span>
              <span className="text-[22px]  text-[#90A3BF]">Blog</span>
              <span className="text-[22px]  text-[#90A3BF]">Podcast</span>
              <span className="text-[22px]  text-[#90A3BF]">
                Invite a Friend
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-[26px] font-[600] text-black">Socials</span>
            <div className="flex flex-col gap-6">
              <span className="text-[22px]  text-[#90A3BF]">Discord</span>
              <span className="text-[22px]  text-[#90A3BF]">Instagram</span>
              <span className="text-[22px]  text-[#90A3BF]">Twitter</span>
              <span className="text-[22px]  text-[#90A3BF]">Facebook </span>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="my-[60px]"
        xmlns="http://www.w3.org/2000/svg"
        width="1761"
        height="2"
        viewBox="0 0 1761 2"
        fill="none"
      >
        <path
          d="M1760.67 0L0.666451 0V1.33333L1760.67 1.33333V0Z"
          fill="#131313"
          fill-opacity="0.16"
        />
      </svg>
    </div>
  );
};

export default Footer;
