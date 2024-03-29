import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    textStyles?: string,
    rightIcon?: string,
    btnTypes?: "button" | "submit"
}
export interface CustomFillProps{
    title:string,
    

}
export interface SearchManufacturerProps{
    manufacturer:string,
    setManufacturer:(manufacturer:string)=>void;
}
export interface CarProps{
    city_mpg:number
class:string
combination_mpg:number
cylinders:number
displacement:number
drive:string
fuel_type:string
highway_mpg:number
make:string
model:string
transmission:string
year:number
}
export interface TestProps{
    text:number
}
export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
export interface HomeProps {
    searchParams: FilterProps;
  }
  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  export interface OptionProp{
    title:string,
    value:string 
  }
  export interface OptionProps {
    title: string;
    options: OptionProp[];
  }
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }