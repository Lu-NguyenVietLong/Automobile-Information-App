"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`relative rounded-lg py-1 px-2 ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="absolute z-10 w-6 h-6 right-4 top-[50%] flex items-center translate-y-[-50%] bg-white">
          <Image
            src={rightIcon}
            alt="icon"
            width={20}
            height={20}
            className="object-contain bg-gray-600 rounded-full "
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
