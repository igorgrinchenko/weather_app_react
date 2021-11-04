import { React, Component } from "react";

import CurrentWeatherIcon from "../current-weather-icon/current-weather-icon";
import CurrentTemperature from "../current-temperature/current-temperature";
import CurrentTime from "../current-time/current-time";
import CurrentWeatherInfo from "../current-weather-info/current-weather-info";
import CustomSlider from "../slider/slider";
import Input from "../input/input";
import Preloader from "../loader/loader";
import CityName from "../city-name/city-name";

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
    time: "Loading...",
    isLoader: false,
    forecastTemp: [],
    forecastClouds: [],
    forecastDateTimes: [],
    cityName: "",
    country: "",
  };

  getWeatherInfo = (cityName) => {
    this.setState({ isLoader: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=014875972702e245570e39f83fe6ab27`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          temperature: this.convertToCelsius(data.main.temp),
          windSpeed: data.wind.speed + "km/h",
          humidity: data.main.humidity + "%",
          pressure: this.convertPressure(data.main.pressure),
          weatherIcon: data.weather[0].icon,
          cityName: data.name,
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
        this.getForecastInfo(data.name);
        this.setState({
          temperature: this.convertToCelsius(data.main.temp),
          windSpeed: data.wind.speed + "km/h",
          humidity: data.main.humidity + "%",
          pressure: this.convertPressure(data.main.pressure),
          weatherIcon: data.weather[0].icon,
          cityName: data.name,
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

    let forecastTemp = [];
    let forecastClouds = [];
    let forecastDateTimes = [];

    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?&days=7&city=${cityName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key":
            "657efc6598mshe03b34b15c5d0dap17c60ajsn0ae1571e0c9a",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        data.data.forEach((item) => {
          forecastTemp.push(item.temp);
          forecastClouds.push(item.clouds);
          forecastDateTimes.push(item.datetime);
        });

        this.setState({ cityName: data.city_name, country: data.country_code });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoader: false });
      });

    this.setState({
      forecastTemp: forecastTemp,
      forecastClouds: forecastClouds,
      forecastDateTimes: forecastDateTimes,
    });
  };

  getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeatherInfoByLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    }
  };

  getCurrentTime = () => {
    this.setState({
      numberDay: new Date().getDay() + "th",
      weekDay: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date()
      ),
      month: new Date().toLocaleString("en-us", { month: "short" }),
      year: new Date().getFullYear(),
    });

    setInterval(() => {
      this.setState({
        time:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds(),
      });
    }, 1000);
  };

  convertToCelsius = (degrees) => {
    return Math.round(degrees - 275.15) + "°C";
  };

  convertPressure = (pressure) => {
    return Math.round(pressure * 0.75) + "mm";
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
    } = this.state;

    return (
      <div className="App">
        <div className="container">
          {this.state.isLoader ? (
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
