import { React, Component } from "react";

import "./current-weather-info.scss";

import hum from "../../icons/hum.png";
import wind from "../../icons/wind.png";

// because you don't use any lifecycle methods it's better to turn this component to the functional type
class CurrentWeatherInfo extends Component {
  render() {
    const { windSpeed, humidity, pressure } = this.props;
    return (
      <div className="current-weather-info">
        <div>
          <img src={wind} />
          <p>Wind: {windSpeed}</p>
        </div>
        <div>
          <img src={hum} />
          <p>Humidity: {humidity}</p>
        </div>
        <div>
          <img src={hum} />
          <p>Pressure: {pressure}</p>
        </div>
      </div>
    );
  }
}

//example of the possible refactoring
// const weatherParams = ["Wind", "Humidity", "Pressure"];

// const CurrentWeatherInfo = props => {
//   const { windSpeed, humidity, pressure } = props;
//   const paramsMap = {
//     Wind: { imgSrc: wind, value: windSpeed },
//     Humidity: { imgSrc: hum, value: humidity },
//     Pressure: { imgSrc: hum, value: pressure }
//   };
//   return (
//     <div className="current-weather-info">
//       {weatherParams.map(paramName => (
//         <div key={paramName}>
//           <img src={paramsMap[paramName].imgSrc alt={paramName}} />
//           <p>
//             {paramName}: {paramsMap[paramName].value}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

export default CurrentWeatherInfo;
