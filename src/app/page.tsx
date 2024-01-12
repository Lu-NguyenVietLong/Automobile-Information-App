"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/action";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import { useEffect, useState } from "react";

export default function Home({ searchParams }: any) {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   model: searchParams.model || "",
  //   year: searchParams.year || 2023,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  // });

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2023);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        year: year || 2023,
        fuel: fuel.toLowerCase() || "",
        limit: limit || 10,
      });
      console.log("eeeeeeee", fuel.toLowerCase());

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars);

  return (
    <main className="overflow-x-hidden">
      <div className="max-w-[90%] mx-auto">
        <Hero />
        <div className="mt-6 py-4">
          <div>
            <h1 className="text-[30px] font-bold">Car Catalogue</h1>
            <p className="text-gray-600">Explore the cars you might like</p>
          </div>
          <div className="mt-4 flex items-center mb-5">
            <SearchBar
              setSearchManufacturer={setManufacturer}
              setSearchModel={setModel}
            />
            <div className="flex items-center">
              <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter
                title="year"
                options={yearsOfProduction}
                setFilter={setYear}
              />
            </div>
          </div>
          <div>
            {!isDataEmpty ? (
              <section>
                <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                  {allCars.map((car, index) => (
                    <div key={index} className="">
                      <CarCard car={car} />
                    </div>
                  ))}
                </div>
                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
                />
              </section>
            ) : (
              <div>
                <h2>Oops, no results</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
