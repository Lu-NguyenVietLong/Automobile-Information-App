"use client";

import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from "next/image";

import { manufacturers } from "@/constants";
import { SearchManufactureProps } from "@/types";

const SearchManufacture = ({
  manufacture,
  setManufacture,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState("");
  const filterManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacture">
      <Combobox value={manufacture} onChange={setManufacture}>
        <div className="bg-gray-200 px-2 py-1 rounded-l-xl flex items-center relative">
          <Combobox.Button>
            <Image src="/car-logo.svg" width={20} height={20} alt="logo-car" />
          </Combobox.Button>
          <Combobox.Input
            className="bg-transparent outline-none px-2"
            placeholder="Volkswagen"
            displayValue={(manufacture: string) => manufacture}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute top-[110%] z-10 bg-white px-3 py-2 rounded-lg shadow-md w-full right-0">
              {filterManufacturer.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) =>
                    `relative ${
                      active ? "bg-blue-600 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
