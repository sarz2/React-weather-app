import React from "react";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: null,
      windSpeed: null,
      humidity: null,
      sunrise: null,
      sunset: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=59.334591&lon=18.063240&appid=c28cdfebc7df40fe4615a8c45fc175c0`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          temp: data.main.temp,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        })
      );
  }

  render() {
    return (
      <div>
        <div>{this.state.temp}</div>
        <div>{this.state.windSpeed}</div>
      </div>
    );
  }
}

export default Weather;
