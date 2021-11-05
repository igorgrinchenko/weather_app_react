import React from "react";
import "./current-temperature.scss";

const CurrentTemperature = ({ temperature }) => (
  <div className="current-temperature">{temperature}</div>
);

export default CurrentTemperature;
