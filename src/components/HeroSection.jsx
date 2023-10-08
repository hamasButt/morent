import InitialCard from "./cards/InitialCard";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-7 mt-7">
      <div className="flex gap-7 ">
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
    </div>
  );
};

export default HeroSection;
