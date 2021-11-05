import React from "react";
import "./city-name.scss";

const CityName = ({ city, country }) => {
  return (
    <div>
      <p className="city">
        {city}, {country}
      </p>
    </div>
  );
};

export default CityName;
