import React from "react";
import { render } from "@testing-library/react";
import "../css/style.css";

const Profile = () => {
  return (
    <div className="profile container d-flex text-white justify-content-center align-items-center my-5">
      <div className="d-block">
        <h2 className="mb-3">Profile</h2>
        <table className="mx-auto">
          <tr className="my-0">
            <td className="text-left pl-4">First Name</td>
            <td className="pl-5">:</td>
            <td className="text-left pl-2">Ana</td>
          </tr>
          <tr>
            <td className="text-left pl-4">Last Name</td>
            <td className="pl-5">:</td>
            <td className="text-left pl-2">Shofiya</td>
          </tr>
          <tr>
            <td className="text-left pl-4">Email</td>
            <td className="pl-5">:</td>
            <td className="text-left pl-2">myemail@email.com</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Profile;
