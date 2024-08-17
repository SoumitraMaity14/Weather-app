import { useState } from "react";
import Infoweth from "./Infoweth";
import Searchbox from "./Searchbox";

export default function Weatherapp(){
    const [weatherinfo, setWeatherinfo]=useState({
        city: "Delhi",
        felsLike: 24.84,
        temp: 25.05,
        pressure:1000,
        tempMax:25.05,
        tempMin:25.05,
        humidity:47,
        weather: "Haze"
      })
      let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo)
      }
    return(
        <>
        <Searchbox updateInfo={updateInfo}/>
        <Infoweth info={weatherinfo}/>
        </>
    )
}