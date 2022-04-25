import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  let [weather, setWeather] = useState("");
  let [weatherData, setWeatherData] = useState([]);
  const getWeather = async () => {
    const toArray = [];
    try {
      const url =
        '"https://api.openweathermap.org/data/2.5/weather?lat=59.334591&lon=18.063240&appid=3eb1a1c34acc6bf198b6097f19daa05c';
      const res = await axios.get(url);
      toArray.push(res.data);
      setWeather(res.data.weather[0].main);
      setWeatherData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return <div></div>;
};

export default Weather;
