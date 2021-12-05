import { React, useEffect, useState, useDispatch } from "react";
import { connect } from "react-redux";

import CurrentWeatherIcon from "../current-weather-icon/current-weather-icon";
import CurrentTemperature from "../current-temperature/current-temperature";
import CurrentTime from "../current-time/current-time";
import CurrentWeatherInfo from "../current-weather-info/current-weather-info";
import CustomSlider from "../slider/slider";
import Input from "../input/input";
import Preloader from "../loader/loader";
import CityName from "../city-name/city-name";

import { setTemperature } from "../../actions/actions";

import {
  forecastInfoHeader,
  dateFormat,
  long,
  short,
} from "../../constants/constants";

import "./App.scss";

const App = ({ temperature }) => {
  // const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [numberDay, setNumberDay] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [forecastTemp, setForecastTemp] = useState([]);
  const [forecastClouds, setForecastClouds] = useState([]);
  const [forecastDateTimes, setForecastDateTimes] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const dispatch = useDispatch();

  const getWeatherInfo = (cityName) => {
    setIsLoader(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=014875972702e245570e39f83fe6ab27`
    )
      .then((response) => response.json())
      .then((data) => {
        const { wind, main, weather, name } = data;
        // setTemperature(convertToCelsius(main.temp));
        dispatch(setTemperature(convertToCelsius(main.temp)));
        setWindSpeed(`${wind.speed}km/h`);
        setHumidity(`${main.humidity}%`);
        setPressure(convertPressure(main.pressure));
        setWeatherIcon(weather[0].icon);
        setCityName(name);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  const getWeatherInfoByLocation = (latitude, longitude) => {
    setIsLoader(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=08d1316ba8742c08076e7425c28c2614`
    )
      .then((response) => response.json())
      .then((data) => {
        const { wind, main, weather, name } = data;
        getForecastInfo(name);
        // setTemperature(convertToCelsius(main.temp));
        dispatch(setTemperature(convertToCelsius(main.temp)));
        setWindSpeed(`${wind.speed}km/h`);
        setHumidity(`${main.humidity}%`);
        setPressure(convertPressure(main.pressure));
        setWeatherIcon(weather[0].icon);
        setCityName(name);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  const getForecastInfo = (cityName) => {
    setIsLoader(true);

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

        setCityName(city_name);
        setCountry(country_code);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoader(false);
      });

    setForecastTemp(forecastTemp);
    setForecastClouds(forecastClouds);
    setForecastDateTimes(forecastDateTimes);
  };

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      setIsLoader(true);
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        getWeatherInfoByLocation(latitude, longitude);
      });
    }
  };

  const getCurrentTime = () => {
    const date = new Date();

    setNumberDay(`${date.getDay()}th`);
    setWeekDay(
      new Intl.DateTimeFormat(dateFormat, { weekday: long }).format(date)
    );
    setMonth(date.toLocaleString(dateFormat, { month: short }));
    setYear(date.getFullYear());
    setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    setInterval(() => {
      const date = new Date();
      setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }, 1000);
  };

  const convertToCelsius = (degrees) => {
    return `${Math.round(degrees - 275.15)}°C`;
  };

  const convertPressure = (pressure) => {
    return `${Math.round(pressure * 0.75)}mm`;
  };

  useEffect(() => {
    getCurrentTime();
    getCurrentLocationWeather();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {isLoader ? (
          <Preloader />
        ) : (
          <>
            <Input
              getWeatherInfo={getWeatherInfo}
              getForecastInfo={getForecastInfo}
            />
            {cityName && <CityName city={cityName} country={country} />}
            <CurrentWeatherIcon weatherIcon={weatherIcon} />
            <CurrentTemperature temperature={123} />
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
};

const mapStateToProps = (state) => ({
  temperature: state.temperature,
});

export default connect(mapStateToProps)(App);
