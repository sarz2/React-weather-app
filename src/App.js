import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import Forecast from "./components/forecast";
import background from "../src/image/nature.avif";

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [unit, setUnit] = useState("metric");

  const fetchPosition = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

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
          <div>
            {unit === "metric" ? (
              <button onClick={unitName}>Change to Fahrenheit</button>
            ) : (
              <button onClick={unitName}>Change to Celsius</button>
            )}
          </div>
          <Forecast lat={lat} long={long} unit={unit} />
        </div>
      </main>
    </div>
  );
}

export default App;
