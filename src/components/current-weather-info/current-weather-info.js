import React from "react";
import "./current-weather-info.scss";
import hum from "../../icons/hum.png";
import wind from "../../icons/wind.png";

class CurrentWeatherInfo extends React.Component {
  render() {
    const { windSpeed, humidity, pressure } = this.props;
    return (
      <div className="current-weather-info">
        <div>
          <img src={wind} />
          <p>Wind: {windSpeed}</p>
        </div>
        <div>
          <img src={hum} />
          <p>Humidity: {humidity}</p>
        </div>
        <div>
          <img src={hum} />
          <p>Pressure: {pressure}</p>
        </div>
      </div>
    );
  }
}

export default CurrentWeatherInfo;
