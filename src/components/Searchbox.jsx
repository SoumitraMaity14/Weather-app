import { TextField, Button } from "@mui/material";
import { useState } from "react";
import './searchbox.css'
export default function Searchbox({updateInfo}) {
    const [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="73ae664d75f5070c6aef3c2830bdfdda"

    const handalechange=(event)=>{
        setCity(event.target.value)
    }
    let getWeather=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
        let jsonResponse=await response.json();
        console.log(jsonResponse)
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            felsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result)
        return result
        
    }
    
    let  handalesubmit=async(evt)=>{
        evt.preventDefault();
        console.log(city)
        setCity("")
        let newInfo=await getWeather()
        updateInfo(newInfo)
    }
    return (
        <div className="search-box">
            <h2> Weather Search!</h2>
            <form onSubmit={handalesubmit}>
               
                <TextField
                    id="outlined-basic"
                    label="Search City"
                    variant="outlined" 
                    value={city}
                    onChange={handalechange}
                    required
                    />
                    <br></br>
                    <br></br>
                <Button 
                variant="contained"
                type="submit"
                >Search</Button>

            </form>
        </div>
    )
} 