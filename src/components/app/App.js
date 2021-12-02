import { React, Component } from "react";

import CurrentWeatherIcon from "../current-weather-icon/current-weather-icon";
import CurrentTemperature from "../current-temperature/current-temperature";
import CurrentTime from "../current-time/current-time";
import CurrentWeatherInfo from "../current-weather-info/current-weather-info";
import CustomSlider from "../slider/slider";
import Input from "../input/input";
import Preloader from "../loader/loader";
import CityName from "../city-name/city-name";

import {
  forecastInfoHeader,
  dateFormat,
  long,
  short,
} from "../../constants/constants";

import "./App.scss";

class App extends Component {
  state = {
    temperature: "",
    windSpeed: "",
    humidity: "",
    pressure: "",
    weatherIcon: "",
    seconds: "",
    numberDay: "",
    weekDay: "",
    month: "",
    year: "",
    time: "",
    cityName: "",
    country: "",
    forecastTemp: [],
    forecastClouds: [],
    forecastDateTimes: [],
    isLoader: false,
  };

  getWeatherInfo = (cityName) => {
    this.setState({ isLoader: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=014875972702e245570e39f83fe6ab27`
    )
      .then((response) => response.json())
      .then((data) => {
        const { wind, main, weather, name } = data;
        this.setState({
          temperature: this.convertToCelsius(main.temp),
          windSpeed: `${wind.speed}km/h`,
          humidity: `${main.humidity}%`,
          pressure: this.convertPressure(main.pressure),
          weatherIcon: weather[0].icon,
          cityName: name,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoader: false });
      });
  };

  getWeatherInfoByLocation = (latitude, longitude) => {
    this.setState({ isLoader: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=08d1316ba8742c08076e7425c28c2614`
    )
      .then((response) => response.json())
      .then((data) => {
        const { wind, main, weather, name } = data;
        this.getForecastInfo(name);
        this.setState({
          temperature: this.convertToCelsius(main.temp),
          windSpeed: `${wind.speed}km/h`,
          humidity: `${main.humidity}%`,
          pressure: this.convertPressure(main.pressure),
          weatherIcon: weather[0].icon,
          cityName: name,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoader: false });
      });
  };

  getForecastInfo = (cityName) => {
    this.setState({ isLoader: true });

    const forecastTemp = [];
    const forecastClouds = [];
    const forecastDateTimes = [];

    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?&days=7&city=${cityName}`,
      {
        method: "GET",
        headers: forecastInfoHeader,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const { city_name, country_code } = data;
        data.data.forEach((item) => {
          const { temp, clouds, datetime } = item;
          forecastTemp.push(temp);
          forecastClouds.push(clouds);
          forecastDateTimes.push(datetime);
        });

        this.setState({ cityName: city_name, country: country_code });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoader: false });
      });

    this.setState({
      forecastTemp,
      forecastClouds,
      forecastDateTimes,
    });
  };

  getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      this.setState({ isLoader: true });
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.getWeatherInfoByLocation(latitude, longitude);
      });
    }
  };

  getCurrentTime = () => {
    const date = new Date();
    this.setState({
      numberDay: `${date.getDay()}th`,
      weekDay: new Intl.DateTimeFormat(dateFormat, { weekday: long }).format(
        date
      ),
      month: date.toLocaleString(dateFormat, { month: short }),
      year: date.getFullYear(),
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    });

    setInterval(() => {
      const date = new Date();
      this.setState({
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      });
    }, 1000);
  };

  convertToCelsius = (degrees) => {
    return `${Math.round(degrees - 275.15)}°C`;
  };

  convertPressure = (pressure) => {
    return `${Math.round(pressure * 0.75)}mm`;
  };

  componentDidMount() {
    this.getCurrentTime();
    this.getCurrentLocationWeather();
  }

  render() {
    const {
      cityName,
      country,
      weatherIcon,
      temperature,
      numberDay,
      weekDay,
      month,
      year,
      time,
      windSpeed,
      humidity,
      pressure,
      forecastTemp,
      forecastClouds,
      forecastDateTimes,
      isLoader,
    } = this.state;

    return (
      <div className="App">
        <div className="container">
          {isLoader ? (
            <Preloader />
          ) : (
            <>
              <Input
                getWeatherInfo={this.getWeatherInfo}
                getForecastInfo={this.getForecastInfo}
              />
              {cityName && <CityName city={cityName} country={country} />}
              <CurrentWeatherIcon weatherIcon={weatherIcon} />
              <CurrentTemperature temperature={temperature} />
              <CurrentTime
                numberDay={numberDay}
                weekDay={weekDay}
                month={month}
                year={year}
                time={time}
              />
              <CurrentWeatherInfo
                windSpeed={windSpeed}
                humidity={humidity}
                pressure={pressure}
              />
              <CustomSlider
                temperature={forecastTemp}
                clouds={forecastClouds}
                date={forecastDateTimes}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
