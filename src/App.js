import "./App.css";
import React from "react";
import Weather from "./components/weather/weather";
import Forecast from "./components/forecast/forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> U07 React Weather App</h1>
      </header>
      <main>
        <Weather />
        {/* <Forecast /> */}
      </main>
      <footer>Page created by Sara</footer>
    </div>
  );
}

export default App;
