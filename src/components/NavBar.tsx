import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 bg-white shadow-lg z-50 ">
      <div className="max-w-[90%] mx-auto flex justify-between items-center py-4 ">
        <Link href={`/`} className="flex justify-center items-center">
          <Image
            alt="logo"
            src="/logo.svg"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          btnType="button"
          title="Sign In"
          containerStyles="bg-blue-600 text-white font-semibold"
        />
      </div>
    </nav>
  );
};

export default NavBar;
