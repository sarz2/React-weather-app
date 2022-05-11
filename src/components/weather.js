import "./weather.css";
import React, { useEffect, useState } from "react";
import Forecast from "./forecast";
import axios from "axios";

const Weather = ({ lat, long, unit }) => {
  const [weather, setWeather] = useState();
  const appId = "e3f4c3ac9b20eb9eace376b2dd72bf27";

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: "59.334591",
            lon: "18.06324",
            units: unit,
            appid: appId,
          },
        }
      );
      setWeather(data);
    };
    search();
  }, [lat, long, unit]);

  return (
    <div className="weathercontainer">
      {weather && (
        <div className="bigcontainer">
          <div className="ui header">{weather.name}</div>
          <div className=" ui header temp">
            {Math.round(weather.main.temp)}°{" "}
          </div>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          ></img>
          <ul className="listcontainer">
            <li>
              {weather.wind.speed} m/s <br /> Wind Speed
            </li>
            <li>
              {weather.main.humidity}% <br /> Humidity
            </li>
          </ul>
          <div className="listcontainer">
            <p>
              {new Date(weather.sys.sunrise * 1000)
                .toLocaleTimeString()
                .slice(0, -3)}{" "}
              <br />
              Sunrise
            </p>
            <p>
              {new Date(weather.sys.sunset * 1000)
                .toLocaleTimeString()
                .slice(0, -3)}{" "}
              <br />
              Sunset
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
