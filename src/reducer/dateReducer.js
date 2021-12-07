import {
  SET_NUMBER_DAY,
  SET_WEEK_DAY,
  SET_MONTH,
  SET_YEAR,
  SET_TIME,
} from "../constants/constants";

const initialState = {
  numberDay: "",
  weekDay: "",
  month: "",
  year: "",
  time: "",
};

const setNumberDay = (state, { numberDay }) => ({
  ...state,
  numberDay: numberDay,
});

const setWeekDay = (state, { weekDay }) => ({
  ...state,
  weekDay: weekDay,
});

const setMonth = (state, { month }) => ({
  ...state,
  month: month,
});

const setYear = (state, { year }) => ({
  ...state,
  year: year,
});

const setTime = (state, { time }) => ({
  ...state,
  time: time,
});

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default dateReducer;
