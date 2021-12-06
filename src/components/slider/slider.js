import { React } from "react";
import Slider from "react-slick";
import { days } from "../../constants/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

import sunWeather from "../../icons/01d.png";
import sunWithCloudsWeather from "../../icons/02d.png";
import cloudsWeather from "../../icons/03d.png";

const CustomSlider = ({ date, clouds, temperature }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const getDay = (dayValue) => {
    const newDate = new Date(dayValue);
    const dayName = days[newDate.getDay()];
    return dayName;
  };

  const getTemp = (tempValue) => {
    if (isNaN(temperature)) {
      return `${Math.round(temperature[tempValue])}°C`;
    }
  };

  const setWeatherIcon = (cloudsValue) => {
    const style = {
      width: "50px",
      height: "auto",
    };

    if (clouds[cloudsValue] <= 25) {
      return <img src={sunWeather} style={style} alt="sun" />;
    } else if (clouds[cloudsValue] > 25 && clouds[cloudsValue] <= 50) {
      return (
        <img src={sunWithCloudsWeather} style={style} alt="sun with clouds" />
      );
    } else if (clouds[cloudsValue] > 50 && clouds[cloudsValue] <= 100) {
      return <img src={cloudsWeather} style={style} alt="clouds" />;
    }

    return;
  };

  return (
    <div>
      <div className="slider">
        <Slider {...settings}>
          <div className="item">
            <p>{getTemp(1)}</p>
            <p>{setWeatherIcon(1)}</p>
            <p>{getDay(date[1])}</p>
          </div>
          <div className="item">
            <p>{getTemp(2)}</p>
            <p>{setWeatherIcon(2)}</p>
            <p>{getDay(date[2])}</p>
          </div>
          <div className="item">
            <p>{getTemp(3)}</p>
            <p>{setWeatherIcon(3)}</p>
            <p>{getDay(date[3])}</p>
          </div>
          <div className="item">
            <p>{getTemp(4)}</p>
            <p>{setWeatherIcon(4)}</p>
            <p>{getDay(date[4])}</p>
          </div>
          <div className="item">
            <p>{getTemp(5)}</p>
            <p>{setWeatherIcon(5)}</p>
            <p>{getDay(date[5])}</p>
          </div>
          <div className="item">
            <p>{getTemp(6)}</p>
            <p>{setWeatherIcon(6)}</p>
            <p>{getDay(date[6])}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;

// Here I should refactor render section
