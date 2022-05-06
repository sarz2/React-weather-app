import React from "react";

const iconConfig = {
  hot: {
    iconName: "sun",
  },
  snow: {
    iconName: "snowflake",
  },
  mist: {
    iconName: "low vision",
  },
  rain: {
    iconName: "tint",
  },
  cloud: {
    iconName: "cloud",
  },
};

const getIcon = (description) => {
  if (description == "clear sky") {
    return "hot";
  } else if (
    description == "few clouds" ||
    "scattered clouds" ||
    "broken clouds"
  ) {
    return "cloud";
  } else if (description == "shower rain" || "rain" || "thunderstorm") {
    return "rain";
  } else if (description == "snow") {
    return "snow";
  } else {
    return "mist";
  }
};

export const IconDisplay = (props) => {
  const icon = getIcon(props.description);
  const { iconName } = iconConfig[icon];

  return (
    <div className="ui card">
      <i className={`massive ${iconName} icon`}></i>
      <div>{props.children}</div>
    </div>
  );
};
