import React from "react";
import "./current-time.scss";

class CurrentTime extends React.Component {
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