import { React, Component } from "react";
import "./current-temperature.scss";

class CurrentTemperature extends Component {
  render() {
    const { temperature } = this.props;
    return <div className="current-temperature">{temperature}</div>;
  }
}

export default CurrentTemperature;
