import React, { useEffect, useState } from "react";
import axios from "axios";
import "./forecast.css";

const Forecast = (props) => {
  const [forecast, setForecast] = useState([]);
  const [date, setDate] = useState("");
  const appId = "e3f4c3ac9b20eb9eace376b2dd72bf27";

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            lat: props.lat,
            lon: props.long,
            units: props.unit,
            appid: appId,
          },
        }
      );
      setForecast(data.list);
    };
    search();
    todaysDate();
  }, [props.lat, props.long, props.unit]);

  const slicedArray = forecast.slice(0, 5);

  const renderedForecast = slicedArray.map((result) => {
    return (
      <div>
        <div key={result.weather[0].id} className="hourlycontainer">
          <h1>{result.dt_txt.slice(10, -3)}</h1>
          <p>{result.main.temp}°</p>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
          ></img>
          <p>{result.wind.speed}m/s</p>
          <p>{result.main.humidity}%</p>
          <p>{result.weather[0].description}</p>
        </div>
      </div>
    );
  });

  const renderedFutureForecast = forecast.map((result) => {
    let weekday = getDayOfWeek(result.dt_txt.slice(0, -9));
    if (result.dt_txt.slice(11) === "12:00:00") {
      return (
        <div key={result.weather.id}>
          <div>{weekday}</div>
          <div>{result.main.temp}°</div>
        </div>
      );
    }
    return "";
  });

  let todaysDate = () => {
    let today = new Date().toISOString().slice(0, 10);
    setDate(today);
  };

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
  }

  return (
    <div>
      <div className="bigwrapper">
        <div className="container">{renderedForecast}</div>
      </div>
      <div className="bigwrapper">
        <div className="container">{renderedFutureForecast}</div>
      </div>
    </div>
  );
};

export default Forecast;
