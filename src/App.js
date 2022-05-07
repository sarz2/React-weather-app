import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import Forecast from "./components/forecast";
import { IconDisplay } from "./components/IconDisplay";

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [unit, setUnit] = useState("metric");

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
    <div className="App">
      <header className="App-header">
        <h1> U07 React Weather App</h1>
      </header>
      <main>
        <Weather lat={lat} long={long} unit={unit} />
        <Forecast lat={lat} long={long} unit={unit} />
        <button onClick={unitName}></button>
      </main>
      <footer>Page created by Sara</footer>
    </div>
  );
}

export default App;
