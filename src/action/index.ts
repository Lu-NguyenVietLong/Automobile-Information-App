'use server'

import { FilterProps } from "@/types";

export const fetchCars = async (filter: FilterProps) => {
    const { manufacturer, model, year, fuel, limit} = filter
    const headers = {
        'X-RapidAPI-Key': 'de4faf8775msh6d0c0cecab557a7p10452ejsnbc5b04616b40',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,

    }) ;
    const result = await res.json();
    return result;

}



