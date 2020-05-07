import React from "react";
import { render } from "@testing-library/react";
import "../css/style.css";

const SignIn = () => {
  return (
    <div className="signin container d-flex justify-content-center align-items-center my-5">
      <div className="d-block">
        <h2 className="text-white">Sign In</h2>
        <form>
          <div className="form-group text-left">
            <label className="text-white" for="exampleFormControlInput1">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your Name Here"
            />
          </div>
          <div className="form-group text-left">
            <label className="text-white" for="exampleFormControlInput2">
              Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Your Password Here"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btnSignin btn-block">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
