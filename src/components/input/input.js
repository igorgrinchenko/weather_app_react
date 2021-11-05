import { React, Component } from "react";
import "./input.scss";

class Input extends Component {
  state = {
    cityValue: "",
  };
  getCityValue = (e) => {
    if (e.keyCode === 13) {
      const { getWeatherInfo, getForecastInfo } = this.props;
      const { cityValue } = this.state;
      getWeatherInfo(cityValue);
      getForecastInfo(cityValue);
    }
  };
  onChange = (e) => {
    const { value } = e.target;
    this.setState({ cityValue: value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          id="input"
          onKeyDown={this.getCityValue}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Input;
