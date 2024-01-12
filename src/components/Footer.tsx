import Image from "next/image";
import React from "react";

import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-6 text-[14px]  ">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 mb-6 ">
          <div>
            <div>
              <Image src="/logo.svg" alt="logo" width={118} height={18} />
            </div>
            <p className="mt-3 font-medium text-gray-600">
              Created by Nguyen Viet Long
            </p>
          </div>
          {footerLinks.map((link, index) => (
            <div className="" key={index}>
              <h2 className="leading-[18px] mb-3 text-gray-900 font-bold">
                {link.title}
              </h2>
              {link.links.map((item, index) => (
                <Link
                  key={index}
                  className="font-medium text-gray-600 block mb-2"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center py-6 border-t text-gray-600 border-gray-300">
          <p>@2024 Created by Nguyen Viet Long</p>
          <p>Programing by NextJS 14 and Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
