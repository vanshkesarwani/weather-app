import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.32,
        humidity: 24,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Vansh</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}