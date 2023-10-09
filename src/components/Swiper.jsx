import React, { useEffect } from "react";
import Swiper from "swiper";
import CarsInfoCard from "./cards/CarsInfoCard";

const CarsSwiper = ({ cars, children }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerView: "auto",
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container overflow-hidden cursor-pointer md:hidden">
      <div className="swiper-wrapper flex">
        {cars.map((item, id) => {
          return (
            <div key={id} className="swiper-slide">
              <CarsInfoCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarsSwiper;
