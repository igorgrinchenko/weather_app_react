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

const initialState = {
  temperature: "",
  windSpeed: "",
  humidity: "",
  pressure: "",
  weatherIcon: "",
  cityName: "",
  country: "",
  numberDay: "",
  weekDay: "",
  month: "",
  year: "",
  time: "",
  forecastTemp: [],
  forecastClouds: [],
  forecastDateTimes: [],
  isLoader: false,
};

const setTemperature = (state, action) => ({
  ...state,
  temperature: action.temperature,
});

const setWindSpeed = (state, action) => ({
  ...state,
  windSpeed: action.windSpeed,
});

const setHumidity = (state, action) => ({
  ...state,
  humidity: action.humidity,
});

const setPressure = (state, action) => ({
  ...state,
  pressure: action.pressure,
});

const setWeatherIcon = (state, action) => ({
  ...state,
  weatherIcon: action.weatherIcon,
});

const setCityName = (state, action) => ({
  ...state,
  cityName: action.cityName,
});

const setCountry = (state, action) => ({
  ...state,
  country: action.country,
});

const setNumberDay = (state, action) => ({
  ...state,
  numberDay: action.numberDay,
});

const setWeekDay = (state, action) => ({
  ...state,
  weekDay: action.weekDay,
});

const setMonth = (state, action) => ({
  ...state,
  month: action.month,
});

const setYear = (state, action) => ({
  ...state,
  year: action.year,
});

const setTime = (state, action) => ({
  ...state,
  time: action.time,
});

const setForecastTemp = (state, action) => ({
  ...state,
  forecastTemp: action.forecastTemp,
});

const setForecastClouds = (state, action) => ({
  ...state,
  forecastClouds: action.forecastClouds,
});

const setForecastDateTimes = (state, action) => ({
  ...state,
  forecastDateTimes: action.forecastDateTimes,
});

const setIsLoader = (state, action) => ({
  ...state,
  isLoader: action.isLoader,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPERATURE:
      return setTemperature(state, action);
    case SET_WIND_SPEED:
      return setWindSpeed(state, action);
    case SET_HUMIDITY:
      return setHumidity(state, action);
    case SET_PRESSURE:
      return setPressure(state, action);
    case SET_WEATHER_ICON:
      return setWeatherIcon(state, action);
    case SET_CITY_NAME:
      return setCityName(state, action);
    case SET_COUNTRY:
      return setCountry(state, action);
    case SET_NUMBER_DAY:
      return setNumberDay(state, action);
    case SET_WEEK_DAY:
      return setWeekDay(state, action);
    case SET_MONTH:
      return setMonth(state, action);
    case SET_YEAR:
      return setYear(state, action);
    case SET_TIME:
      return setTime(state, action);
    case SET_FORECAST_TEMP:
      return setForecastTemp(state, action);
    case SET_FORECAST_CLOUDS:
      return setForecastClouds(state, action);
    case SET_FORECAST_DATE_TIMES:
      return setForecastDateTimes(state, action);
    case SET_IS_LOADER:
      return setIsLoader(state, action);
  }
};

export default reducer;
