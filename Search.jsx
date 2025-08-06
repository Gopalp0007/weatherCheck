import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css"
import { useState } from "react";

export default function SearchBox ({updateInfo}){
      let [city, setcity]= useState("");
      let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c08719a6451d7d9ef06e050eaf8c6c5d";

    let getWeatherInfo = async () =>{
      try{
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    let jsonResponse = await response.json();

    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(err){
   throw err;
    }

    };
  

    let handelChange = (evt) => {
        setcity (evt.target.value);
        if (error) setError(false);  // clear error on typing
    };
    let handelSubmit = async (evt)=> {
    
          evt.preventDefault();
        console.log(city);
          try{
        setcity(""); 
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo)
      }catch(err){
        setError (true);

      }
    };
    return(
        <div  className="SearchBox">
            <form  onSubmit={handelSubmit}>
                <TextField
                 id="city"
                  label="City Name" 
                  variant="outlined"
                  required
                  value={city}
                  onChange={handelChange} />
                <br /><br />
                <Button
                 variant="contained"
                  type="submit">
        search
      </Button> 
    {error && <p style={{color:"red"}}>No such place exist!</p>}

            </form>
        </div>
    )
}