import React from "react";

import "./current-weather-info.scss";

import hum from "../../icons/hum.png";
import wind from "../../icons/wind.png";

const CurrentWeatherInfo = ({ windSpeed, humidity, pressure }) => {
  const weatherParams = ["Wind", "Humidity", "Pressure"];

  const paramsMap = {
    Wind: { imgSrc: wind, value: windSpeed },
    Humidity: { imgSrc: hum, value: humidity },
    Pressure: { imgSrc: hum, value: pressure },
  };

  return (
    <div className="current-weather-info">
      {weatherParams.map((paramName, index) => (
        <div key={index}>
          <img src={paramsMap[paramName].imgSrc} alt={paramName} />
          <p>
            {paramName}: {paramsMap[paramName].value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CurrentWeatherInfo;
