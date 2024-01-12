import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { CarModalType } from "@/types";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils/main";

const CarDetails = ({ isOpen, car, closeModal }: CarModalType) => {
  return (
    <div
      className={`fixed z-50 top-0 left-0 right-0 bottom-0 ${
        !isOpen && "invisible"
      }`}
    >
      <div
        className="absolute w-full h-full bg-black opacity-40 z-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white z-50 w-[80%] max-h-[90%] p-4 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-[24px] overflow-y-auto">
        <div
          className="absolute top-3 right-3 cursor-pointer z-10 bg-white p-1 rounded-full"
          onClick={closeModal}
        >
          <Image alt="close-img" src="/close.svg" width={20} height={20} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="w-full h-full">
            <div className="w-full h-[400px] sm:h-[200px] relative">
              <Image
                alt="img"
                src="/pattern.png"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] flex items-center justify-center h-full w-full translate-y-[-50%] ">
                <Image
                  alt="bg-img"
                  src={generateCarImageUrl(car)}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="pt-2 grid grid-cols-3 gap-5 h-[100px]">
              <div className="bg-slate-200 flex justify-center items-center">
                <Image
                  alt="bg-img"
                  src={generateCarImageUrl(car, "29")}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-slate-200 flex justify-center items-center">
                <Image
                  alt="bg-img"
                  src={generateCarImageUrl(car, "33")}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-slate-200 flex justify-center items-center">
                <Image
                  alt="bg-img"
                  src={generateCarImageUrl(car, "13")}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full px-2">
            <h3 className="text-[16px] font-bold mb-4">
              {car.make.toUpperCase()} {car.model}
            </h3>
            <div>
              {Object.entries(car).map(([key, value]) => (
                <div key={key} className="flex justify-between  mb-2">
                  <h4 className="font-semibold text-gray-500">
                    {key.toUpperCase()}
                  </h4>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
