import {
  SET_TEMPERATURE,
  SET_WIND_SPEED,
  SET_HUMIDITY,
  SET_PRESSURE,
  SET_WEATHER_ICON,
  SET_CITY_NAME,
  SET_COUNTRY,
  SET_IS_LOADER,
} from "../constants/constants";

const initialState = {
  temperature: "",
  windSpeed: "",
  humidity: "",
  pressure: "",
  weatherIcon: "",
  cityName: "",
  country: "",
  isLoader: false,
};

const setTemperature = (state, { temperature }) => ({
  ...state,
  temperature: temperature,
});

const setWindSpeed = (state, { windSpeed }) => ({
  ...state,
  windSpeed: windSpeed,
});

const setHumidity = (state, { humidity }) => ({
  ...state,
  humidity: humidity,
});

const setPressure = (state, { pressure }) => ({
  ...state,
  pressure: pressure,
});

const setWeatherIcon = (state, { weatherIcon }) => ({
  ...state,
  weatherIcon: weatherIcon,
});

const setCityName = (state, { cityName }) => ({
  ...state,
  cityName: cityName,
});

const setCountry = (state, { country }) => ({
  ...state,
  country: country,
});

const setIsLoader = (state, { isLoader }) => ({
  ...state,
  isLoader: isLoader,
});

const weatherReducer = (state = initialState, action) => {
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
    case SET_IS_LOADER:
      return setIsLoader(state, action);
    default:
      return state;
  }
};

export default weatherReducer;
