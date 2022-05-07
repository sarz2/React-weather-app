import React, { useEffect, useState } from "react";
import Forecast from "./forecast";
import { IconDisplay } from "./IconDisplay";
import axios from "axios";

const Weather = ({ lat, long, unit }) => {
  const [weather, setWeather] = useState();
  const appId = "e3f4c3ac9b20eb9eace376b2dd72bf27";

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: lat,
            lon: long,
            units: unit,
            appid: appId,
          },
        }
      );
      setWeather(data);
    };
    search();
  }, [lat, long, unit]);

  return (
    <div>
      {weather && (
        <div>
          <div>Temperatur: {weather.main.temp} </div>
          <div>Wind speed: {weather.wind.speed}</div>
          <div>Humidity: {weather.main.humidity}</div>
          <div>
            Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
          </div>
          <div>
            Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );

  // return (
  //   <div>
  //     {/* <IconDisplay description={weather.weather.description}> */}
  //     {/* </IconDisplay> */}
  //   </div>
  // );
};

//   render() {
//     return (
//       <div>
//         <IconDisplay description={this.state.description}>
//           <div>{this.state.temp}</div>
//           <div>{this.state.description}</div>
//         </IconDisplay>
//       </div>
//     );
//   }
// }

export default Weather;
