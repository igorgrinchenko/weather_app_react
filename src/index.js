import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/app/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
