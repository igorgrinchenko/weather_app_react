import {
  SET_TEMPERATURE,
  SET_WIND_SPEED,
  SET_HUMIDITY,
  SET_PRESSURE,
  SET_WEATHER_ICON,
  SET_CITY_NAME,
  SET_COUNTRY,
  SET_NUMBER_DAY,
  SET_WEEK_DAY,
  SET_MONTH,
  SET_YEAR,
  SET_TIME,
  SET_FORECAST_TEMP,
  SET_FORECAST_CLOUDS,
  SET_FORECAST_DATE_TIMES,
  SET_IS_LOADER,
} from "../../src/constants/constants";

export const setTemperature = (temperature) => ({
  type: SET_TEMPERATURE,
  temperature,
});

export const setWindSpeed = (windSpeed) => ({
  type: SET_WIND_SPEED,
  windSpeed,
});

export const setHumidity = (humidity) => ({
  type: SET_HUMIDITY,
  humidity,
});

export const setPressure = (pressure) => ({
  type: SET_PRESSURE,
  pressure,
});

export const setWeatherIcon = (weatherIcon) => ({
  type: SET_WEATHER_ICON,
  weatherIcon,
});

export const setCityName = (cityName) => ({
  type: SET_CITY_NAME,
  cityName,
});

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  country,
});

export const setNumberDay = (numberDay) => ({
  type: SET_NUMBER_DAY,
  numberDay,
});

export const setWeekDay = (weekDay) => ({
  type: SET_WEEK_DAY,
  weekDay,
});

export const setMonth = (month) => ({
  type: SET_MONTH,
  month,
});

export const setYear = (year) => ({
  type: SET_YEAR,
  year,
});

export const setTime = (time) => ({
  type: SET_TIME,
  time,
});

export const setForecastTemp = (forecastTemp) => ({
  type: SET_FORECAST_TEMP,
  forecastTemp,
});

export const setForecastClouds = (forecastClouds) => ({
  type: SET_FORECAST_CLOUDS,
  forecastClouds,
});

export const setForecastDateTimes = (forecastDateTimes) => ({
  type: SET_FORECAST_DATE_TIMES,
  forecastDateTimes,
});

export const setIsLoader = (isLoader) => ({
  type: SET_IS_LOADER,
  isLoader,
});
