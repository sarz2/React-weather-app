import React, { useEffect, useState } from "react";
import axios from "axios";
import "./forecast.css";

const Forecast = (props) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            lat: props.lat,
            lon: props.long,
            units: props.unit,
            appid: process.env.REACT_APP_API_KEY,
          },
        }
      );
      setForecast(data.list);
    };
    search();
  }, [props.lat, props.long, props.unit]);

  const slicedArray = forecast.slice(0, 5);

  const renderedForecast = slicedArray.map((result, _index) => {
    return (
      <div>
        <div key={_index} className="hourlycontainer">
          <h1>{result.dt_txt.slice(10, -3)}</h1>
          <p>{Math.round(result.main.temp)}°</p>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
            alt={result.weather[0].description}
          ></img>
          <div>
            {props.unit === "metric" ? (
              <p>{Math.round(result.wind.speed)}m/s</p>
            ) : (
              <p>{Math.round(result.wind.speed)}mph</p>
            )}
          </div>
          <p>{result.main.humidity}%</p>
        </div>
      </div>
    );
  });

  const renderedFutureForecast = forecast.map((result, _index) => {
    let weekday = getDayOfWeek(result.dt_txt.slice(0, -9));
    if (result.dt_txt.slice(11) === "12:00:00") {
      return (
        <div key={_index}>
          <h1>{weekday}</h1>
          <div>{Math.round(result.main.temp)}°</div>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
            alt={result.weather[0].description}
          ></img>{" "}
        </div>
      );
    }
    return "";
  });

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
