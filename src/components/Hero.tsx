"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="mt-[128px] ">
      <div>
        <h1 className="text-3xl font-bold">
          Find, book, rent a car - quick and super easy!
        </h1>
        <p className="mt-4">
          Streamline your car experience with our effortless booking process
        </p>
      </div>
      <div className="mt-4">
        <CustomButton
          title="Explore car"
          containerStyles="bg-blue-600 text-white font-semibold"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
