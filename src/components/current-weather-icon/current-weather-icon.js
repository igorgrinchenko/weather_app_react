import { React, Component } from "react";

import "./current-weather-icon.scss";

import sun from "../../icons/01d.png";
import moon from "../../icons/01n.png";
import sunWithClouds from "../../icons/02d.png";
import moonWithClouds from "../../icons/02n.png";
import clouds from "../../icons/03d.png";
import brokenClouds from "../../icons/04d.png";
import rain from "../../icons/09d.png";
import rainWithSun from "../../icons/10d.png";
import rainWithMoon from "../../icons/10n.png";
import lightning from "../../icons/11d.png";
import snow from "../../icons/13d.png";
import mist from "../../icons/50d.png";

class CurrentWeatherIcon extends Component {
  render() {
    const { weatherIcon } = this.props;
    let icon = new String();

    switch (weatherIcon) {
      case "01d":
        icon = sun;
        break;
      case "01n":
        icon = moon;
        break;
      case "02d":
        icon = sunWithClouds;
        break;
      case "02n":
        icon = moonWithClouds;
        break;
      case "03d":
        icon = clouds;
        break;
      case "03n":
        icon = clouds;
        break;
      case "04d":
        icon = brokenClouds;
        break;
      case "04n":
        icon = brokenClouds;
        break;
      case "09d":
        icon = rain;
        break;
      case "09n":
        icon = rain;
        break;
      case "10d":
        icon = rainWithSun;
        break;
      case "10n":
        icon = rainWithMoon;
        break;
      case "11d":
        icon = lightning;
        break;
      case "11n":
        icon = lightning;
        break;
      case "13d":
        icon = snow;
        break;
      case "13n":
        icon = snow;
        break;
      case "50d":
        icon = mist;
        break;
      case "50n":
        icon = mist;
        break;
    }
    return (
      <div className="current-weather-icon">
        <img src={icon} alt="icon" className="icon" />
      </div>
    );
  }
}

export default CurrentWeatherIcon;
