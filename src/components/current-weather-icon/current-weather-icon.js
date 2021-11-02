import React from "react";
import "./current-weather-icon.scss";
import icon from "../../icons/icon.png";

const CurrentWeatherIcon = () => {
  return (
    <div className="current-weather-icon">
      <img src={icon} alt="icon" />
    </div>
  );
};

export default CurrentWeatherIcon;
