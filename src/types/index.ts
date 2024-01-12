import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import ShowMore from '@/components/ShowMore';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
}

export interface OptionsProps {
    title:string,
    value: string | number
}

export interface CustomFilterProps {
    title: string,
    options: OptionsProps[],
    setFilter: Dispatch<SetStateAction<string | number>>
}

export interface SearchManufactureProps {
    manufacture: string,
    setManufacture: (manufacture: string) => void,
}

export interface carProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: string,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface CarModalType {
    car: carProps;
    isOpen: boolean;
    closeModal: ()=>void;
}

export interface FilterProps {
    manufacturer: string,
    model: string,
    year: number,
    fuel: string,
    limit: number,
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean,
    setLimit: Dispatch<SetStateAction<number>>
}

export interface SearchBarProps {
    setSearchManufacturer: Dispatch<SetStateAction<string>>;
    setSearchModel: Dispatch<SetStateAction<string>>;
}