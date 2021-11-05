import React from "react";
import "./current-time.scss";

const CurrentTime = ({ numberDay, weekDay, month, year, time }) => {
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
};

export default CurrentTime;
