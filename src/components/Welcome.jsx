import React from "react";
import { render } from "@testing-library/react";
import "../css/style.css";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <div className="WelContainer">
      <div className="container welcome d-flex justify-content-center align-items-center my-5">
        <div className="d-block">
          <h2 className="text-white mb-5">
            Welcome to the <br />
            <strong>Southeast Asia Corona Map</strong>
          </h2>
          <Link to='/covid'><button type="button" class="btn welButton">
            Click here to see the map
          </button></Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
