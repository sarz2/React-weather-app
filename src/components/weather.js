import "./weather.css";
import React, { useEffect, useState } from "react";
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
            lat: lat,
            lon: long,
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
          <div className="header">{weather.name}</div>
          <div className="ui header temp">
            {Math.round(weather.main.temp)}°{" "}
          </div>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          ></img>
          <ul className="listcontainer">
            {unit === "metric" ? (
              <li className="text">
                {Math.round(weather.wind.speed)} m/s <br /> <br /> Wind Speed
              </li>
            ) : (
              <li className="text">
                {Math.round(weather.wind.speed)} mph <br /> <br /> Wind Speed
              </li>
            )}
            <li className="text">
              {weather.main.humidity}% <br /> <br />
              Humidity
            </li>
          </ul>
          <div className="listcontainer">
            <p className="text">
              {new Date(weather.sys.sunrise * 1000)
                .toLocaleTimeString()
                .slice(0, -3)}{" "}
              <br />
              Sunrise
            </p>
            <p className="text">
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
