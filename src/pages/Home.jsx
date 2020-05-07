import React from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import SignIn from "../components/SignIn";
import Profile from "../components/Profile";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <Welcome />
          </div>
        </div>
        {/* <SignIn /> */}
        {/* <Profile /> */}
      </div>
    );
  }
}

export default Home;
