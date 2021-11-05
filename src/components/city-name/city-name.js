import { React, Component } from "react";
import "./city-name.scss";

// because you don't use any lifecycle methods it's better to turn this component to the functional type
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
