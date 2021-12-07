import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/app/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import weatherReducer from "./reducer/weatherReducer";
import forecastReducer from "./reducer/forecastReducer";
import dateReducer from "./reducer/dateReducer";

const reducer = combineReducers({
  weatherReducer,
  forecastReducer,
  dateReducer,
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
