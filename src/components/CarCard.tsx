"use client";

import { carProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils/main";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";

const CarCard = ({ car }: { car: carProps }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const carRent = calculateCarRent(year, city_mpg);

  return (
    <div className="car-card ">
      <div className="car-card__content cursor-pointer bg-gray-200 rounded-xl px-4 py-5 group hover:bg-white hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
        <h2 className="font-bold">
          {make.toUpperCase()} {model}
        </h2>
        <p className="relative mt-3">
          <span className="self-start text-[13px] absolute top-[-7px] left-[-2px]">
            $
          </span>
          <span className="font-bold">&nbsp;{carRent}</span>
          <span className="self-end text-[13px] absolute bottom-[-6px]">
            /day
          </span>
        </p>
        <div className="relative w-full h-40 mt-3">
          <Image
            src={generateCarImageUrl(car)}
            alt="Car Image"
            fill
            priority
            className="object-contain z-0"
          />
        </div>
        <div className="flex mt-3 relative">
          <div className="flex justify-between w-full ">
            <div className="flex flex-col items-center w-full">
              <Image
                alt="steering wheel"
                src="/steering-wheel.svg"
                width={20}
                height={20}
              />
              <p className="text-[12px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <Image alt="tire" src="/tire.svg" width={20} height={20} />
              <p className="text-[12px]">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col items-center w-full ">
              <Image alt="gas" src="/gas.svg" width={20} height={20} />
              <p className="text-[12px]">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="absolute w-full">
            <CustomButton
              title="View more"
              containerStyles="w-full py-3 rounded-full brightness-90 hover:brightness-[0.8] bg-white  shadow-lg invisible transition-all group-hover:visible translate-y-[50%] group-hover:translate-y-[0%]"
              textStyles="text-gray-700 font-semibold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
