import {
  SET_FORECAST_TEMP,
  SET_FORECAST_CLOUDS,
  SET_FORECAST_DATE_TIMES,
} from "../constants/constants";

const initialState = {
  forecastTemp: [],
  forecastClouds: [],
  forecastDateTimes: [],
};

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

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST_TEMP:
      return setForecastTemp(state, action);
    case SET_FORECAST_CLOUDS:
      return setForecastClouds(state, action);
    case SET_FORECAST_DATE_TIMES:
      return setForecastDateTimes(state, action);
    default:
      return state;
  }
};

export default forecastReducer;
