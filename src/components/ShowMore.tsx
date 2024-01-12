"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // const searchParams = new URLSearchParams(window.location.search);

    const newLimit = (pageNumber + 1) * 10;

    // searchParams.set("limit", newLimit.toString());

    // const newPathName = `${
    //   window.location.pathname
    // }?${searchParams.toString()}`;

    // router.push(newPathName);
    setLimit(newLimit);
  };

  return (
    <div className="flex justify-center items-center mt-6">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-blue-600"
          textStyles="text-white font-semibold"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
