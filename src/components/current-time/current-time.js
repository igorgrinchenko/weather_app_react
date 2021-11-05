import { React, Component } from "react";
import "./current-time.scss";

// because you don't use any lifecycle methods it's better to turn this component to the functional type
class CurrentTime extends Component {
  render() {
    const { numberDay, weekDay, month, year, time } = this.props;
    return (
      <div className="current-time">
        <p>
          {numberDay} {month} {year}
        </p>
        <p>
          {weekDay} | {time}
        </p>
      </div>
    );
  }
}

export default CurrentTime;
