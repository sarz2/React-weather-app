import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import Forecast from "./components/forecast";
import background from "../src/image/nature.avif";

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [unit, setUnit] = useState("metric");
  const [cityName, setCityName] = useState("");

  function fetchPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (err) => setErrorMessage({ err })
    );
  }

  useEffect(() => {
    fetchPosition();
  });

  const unitName = () => {
    if (unit === "imperial") {
      setUnit("metric");
      return <div>Celcius</div>;
    }
    setUnit("imperial");
    return <div>Fahrenheit</div>;
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <div>
          <Weather lat={lat} long={long} unit={unit} />
          <Forecast lat={lat} long={long} unit={unit} />
          <button onClick={unitName}></button>
        </div>
      </main>
    </div>
  );
}

export default App;
