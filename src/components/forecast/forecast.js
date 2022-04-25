import React, { useState } from "react";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  function getForecast() {
    const options = {
      method: "GET",
    };

    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=59.334591&lon=18.063240&appid=3eb1a1c34acc6bf198b6097f19daa05c",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <div>{JSON.stringify(responseObj)}</div>
      <button {...getForecast()}>Get Forecast</button>
    </div>
  );
};

export default Forecast;
