import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Navigation";
import { connect } from "react-redux";

const Profile = (props) => {
  //get data is_login, email and full_name from local storage
  // const is_login = JSON.parse(localStorage.getItem("is_login"));
  // const email = localStorage.getItem("email");
  // const full_name = localStorage.getItem("full_name");

  //set condition when status login == nul, redirect to signin and
  //show profile when is login is not null
  if (!props.dataUser.is_login) {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: { message: "gagal login ya.." },
        }}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <section className="content">
          <h1
            style={{
              textalign: "center",
            }}
          >
            Profile
          </h1>
          <img
            src={props.dataUser.avatar}
            class="avatar"
            alt="avatar icon"
            style={{ width: "50vmin" }}
          />
          <p className="mt-3">
            <label>Name:</label> {props.dataUser.username}
          </p>
          <p className="mt-3">
            <label>Email:</label> {props.dataUser.email}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
// export default Profile;
