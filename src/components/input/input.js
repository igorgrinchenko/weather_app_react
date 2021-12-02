import { React, useState } from "react";
import { enterButton } from "../../constants/constants";
import "./input.scss";

const Input = ({ getWeatherInfo, getForecastInfo }) => {
  const [cityValue, setCityValue] = useState("");

  const getCityValue = (event) => {
    const { keyCode } = event;
    const isEnterButtonPressed = keyCode === enterButton;
    if (isEnterButtonPressed) {
      getWeatherInfo(cityValue);
      getForecastInfo(cityValue);
    }
  };
  const onChange = (event) => {
    const { value } = event.target;
    setCityValue(value);
  };
  return (
    <div>
      <input
        type="text"
        id="input"
        onKeyDown={getCityValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
