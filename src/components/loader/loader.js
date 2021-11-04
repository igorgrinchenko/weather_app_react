import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loader.scss";

const Preloader = () => {
  return (
    <div className="loader">
      <Loader type="Oval" color="#ffffff" height={100} width={100} />
    </div>
  );
};

export default Preloader;
