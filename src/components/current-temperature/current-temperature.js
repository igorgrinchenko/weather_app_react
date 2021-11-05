import { React, Component } from "react";
import "./current-temperature.scss";

// because you don't use any lifecycle methods it's better to turn this component to the functional type
class CurrentTemperature extends Component {
  render() {
    const { temperature } = this.props;
    return <div className="current-temperature">{temperature}</div>;
  }
}

//example of the possible refactoring
// const CurrentTemperature = ({ temperature }) => (
//   <div className="current-temperature">{temperature}</div>
// );

export default CurrentTemperature;
