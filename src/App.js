import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import Forecast from "./components/forecast";
import { IconDisplay } from "./components/IconDisplay";

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <div className="App">
      <header className="App-header">
        <h1> U07 React Weather App</h1>
      </header>
      <main>
        <Weather lat={lat} long={long} />
        <Forecast lat={lat} long={long} />
      </main>
      <footer>Page created by Sara</footer>
    </div>
  );
}

export default App;
