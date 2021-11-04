import { React, Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

import sunWeather from "../../icons/01d.png";
import sunWithCloudsWeather from "../../icons/02d.png";
import cloudsWeather from "../../icons/03d.png";

class CustomSlider extends Component {
  getDay = (dayValue) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const newDate = new Date(dayValue);
    const dayName = days[newDate.getDay()];
    return dayName;
  };

  getTemp = (tempValue) => {
    const { temperature } = this.props;
    console.log(isNaN(temperature));
    if (isNaN(temperature)) {
      return Math.round(temperature[tempValue]) + "°C";
    }
  };

  setWeatherIcon = (cloudsValue) => {
    const { clouds } = this.props;
    const style = {
      width: "50px",
      height: "auto",
    };

    if (clouds[cloudsValue] <= 25) {
      return <img src={sunWeather} style={style} />;
    } else if (clouds[cloudsValue] > 25 && clouds[cloudsValue] <= 50) {
      return <img src={sunWithCloudsWeather} style={style} />;
    } else if (clouds[cloudsValue] > 50 && clouds[cloudsValue] <= 100) {
      return <img src={cloudsWeather} style={style} />;
    } else {
      return;
    }
  };

  render() {
    const { date } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="slider">
          <Slider {...settings}>
            <div className="item">
              <p>{this.getTemp(1)}</p>
              <p>{this.setWeatherIcon(1)}</p>
              <p>{this.getDay(date[1])}</p>
            </div>
            <div className="item">
              <p>{this.getTemp(2)}</p>
              <p>{this.setWeatherIcon(2)}</p>
              <p>{this.getDay(date[2])}</p>
            </div>
            <div className="item">
              <p>{this.getTemp(3)}</p>
              <p>{this.setWeatherIcon(3)}</p>
              <p>{this.getDay(date[3])}</p>
            </div>
            <div className="item">
              <p>{this.getTemp(4)}</p>
              <p>{this.setWeatherIcon(4)}</p>
              <p>{this.getDay(date[4])}</p>
            </div>
            <div className="item">
              <p>{this.getTemp(5)}</p>
              <p>{this.setWeatherIcon(5)}</p>
              <p>{this.getDay(date[5])}</p>
            </div>
            <div className="item">
              <p>{this.getTemp(6)}</p>
              <p>{this.setWeatherIcon(6)}</p>
              <p>{this.getDay(date[6])}</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default CustomSlider;
