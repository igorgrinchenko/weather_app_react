import { React, Component } from "react";
import "./input.scss";

class Input extends Component {
  getCityValue = (e) => {
    if (e.keyCode === 13) {
      const { getWeatherInfo, getForecastInfo } = this.props;
      const cityValue = document.getElementById("input").value;
      getWeatherInfo(cityValue);
      getForecastInfo(cityValue);
    }
  };

  render() {
    return (
      <div>
        <input type="text" id="input" onKeyDown={this.getCityValue} />
      </div>
    );
  }
}

export default Input;
