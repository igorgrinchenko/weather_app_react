import React from "react";
import "./App.scss";
import CurrentWeatherIcon from "../current-weather-icon/current-weather-icon";
import CurrentTemperature from "../current-temperature/current-temperature";
import CurrentTime from "../current-time/current-time";
import CurrentWeatherInfo from "../current-weather-info/current-weather-info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      windSpeed: "",
      humidity: "",
      pressure: "",
      numberDay: "",
      weekDay: "",
      month: "",
      year: "",
      time: "",
    };

    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.getForecastInfo = this.getForecastInfo.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.convertToCelsius = this.convertToCelsius.bind(this);
    this.convertPressure = this.convertPressure.bind(this);
  }

  getWeatherInfo = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=014875972702e245570e39f83fe6ab27`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ temperature: this.convertToCelsius(data.main.temp) });
        this.setState({ windSpeed: data.wind.speed + "km/h" });
        this.setState({ humidity: data.main.humidity + "%" });
        this.setState({ pressure: this.convertPressure(data.main.pressure) });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getForecastInfo = (cityName) => {
    fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?&days=7&city=${cityName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key":
            "9f95c07416msha0635c48c8ed12bp11506ajsn7fa4b292ebaf",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data.data))
      .catch((err) => {
        console.error(err);
      });
  };

  getCurrentTime = () => {
    this.setState({ numberDay: new Date().getDay() + "th" });
    this.setState({
      weekDay: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date()
      ),
    });
    this.setState({
      month: new Date().toLocaleString("en-us", { month: "short" }),
    });
    this.setState({ year: new Date().getFullYear() });
    this.setState({
      time: new Date().getHours() + ":" + new Date().getMinutes(),
    });
  };

  convertToCelsius = (degrees) => {
    return Math.round(degrees - 275.15) + "°C";
  };

  convertPressure = (pressure) => {
    return Math.round(pressure * 0.75) + "mm";
  };

  componentDidMount() {
    this.getWeatherInfo("Lviv");
    this.getForecastInfo("Odessa");
    this.getCurrentTime();
  }

  render() {
    return (
      <div className="App">
        <CurrentWeatherIcon />
        <CurrentTemperature temperature={this.state.temperature} />
        <CurrentTime
          numberDay={this.state.numberDay}
          weekDay={this.state.weekDay}
          month={this.state.month}
          year={this.state.year}
          time={this.state.time}
        />
        <CurrentWeatherInfo
          windSpeed={this.state.windSpeed}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default App;
