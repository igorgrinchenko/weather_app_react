import { React, Component } from "react";
import "./city-name.scss";

class CityName extends Component {
  render() {
    const { city, country } = this.props;
    return (
      <div>
        <p className="city">
          {country ? (
            <>
              {city}, {country}
            </>
          ) : (
            <>{city}</>
          )}
        </p>
      </div>
    );
  }
}

export default CityName;
