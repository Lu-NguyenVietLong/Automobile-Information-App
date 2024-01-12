"use client";
import React, { useState } from "react";
import SearchManufacture from "./SearchManufacture";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchBar = ({
  setSearchManufacturer,
  setSearchModel,
}: SearchBarProps) => {
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacture === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    setSearchManufacturer(manufacture);
    setSearchModel(model);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log("re-search");
    console.log("searchParams1", searchParams);
    // if (model) {
    //   searchParams.set("model", model);
    // } else {
    //   searchParams.delete("model");
    // }

    // if (manufacturer) {
    //   searchParams.set("manufacturer", manufacturer);
    // } else {
    //   searchParams.delete("manufacturer");
    // }

    // console.log("searchParams2", searchParams);

    // const newPathname = `${
    //   window.location.pathname
    // }?${searchParams.toString()}`;
    // console.log("newPathname", newPathname);

    // router.push(newPathname);
  };

  return (
    <form className="search-bar flex items-center" onSubmit={handleSearch}>
      <div className="search-bar__item flex items-center ">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
      <div className="relative">
        <Image
          src="/model-icon.png"
          alt="model-img"
          width={25}
          height={25}
          className="absolute z-10 top-[50%] translate-y-[-50%] left-1"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
          className="bg-gray-200 pl-9 outline-none pr-2 py-1 rounded-r-xl flex items-center relative"
        />
      </div>
      <button type="submit" className="">
        <Image
          src="/magnifying-glass.svg"
          alt="search-img"
          width={40}
          height={40}
        />
      </button>
    </form>
  );
};

export default SearchBar;
