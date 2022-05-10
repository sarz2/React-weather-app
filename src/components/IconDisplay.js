import React from "react";
import "./IconDisplay.css";

const iconConfig = {
  clear: {
    src: "http://openweathermap.org/img/wn/01d.png",
    alt: "clear sky",
  },
  few: {
    src: "http://openweathermap.org/img/wn/02d.png",
    alt: "few clouds",
  },
  scattered: {
    src: "http://openweathermap.org/img/wn/03d.png",
    alt: "scattered clouds",
  },
  broken: {
    src: "http://openweathermap.org/img/wn/04d.png",
    alt: "broken clouds",
  },

  shower: {
    src: "http://openweathermap.org/img/wn/09d.png",
    alt: "shower rains",
  },
  thunder: {
    src: "http://openweathermap.org/img/wn/11d.png",
    alt: "thunderstorm",
  },
  snow: {
    src: "http://openweathermap.org/img/wn/13d.png",
    alt: "snow",
  },
  mist: {
    src: "http://openweathermap.org/img/wn/50d.png",
    alt: "mist",
  },
  rain: {
    src: "http://openweathermap.org/img/wn/10d.png",
    alt: "rain",
  },
};

const getIcon = (description) => {
  switch (description) {
    case "clear sky":
      return "clear";
      break;
    case "few clouds":
      return "few";
      break;
    case "scattered clouds":
      return "scattered";
      break;
    case "broken clouds":
      return "broken";
      break;
    case "shower rain":
      return "shower";
      break;
    case "rain" || "light rain":
      return "rain";
      break;
    case "thunderstorm":
      return "thunder";
      break;
    case "snow":
      return "snow";
      break;
    case "mist":
      return "mist";
      break;
  }
};

export const IconDisplay = (props) => {
  const icon = getIcon(props.description);
  const { src, alt } = iconConfig[icon];

  return (
    <div className="iconcontainer">
      <img src={src} alt={alt}></img>
    </div>
  );
};
