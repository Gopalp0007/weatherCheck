import InfoBox from './InfoBox';
import SearchBox from './Search';
import { useState } from 'react';
export default function WeatherApp(){
   const [weatherInfo, setWeatherInfo]=useState({
    city: "delhi",
feels_like:  34.79,
humidity: 64,
temp: 30.52,
tempMax: 30.52,
tempMin: 30.52,
weather: "overcast clouds",
   
   });

   let updateInfo =(newInfo) => {
    setWeatherInfo(newInfo);
   }
    return(
        <div>
            <h2>Weather App by  patel</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        </div>
    );
}