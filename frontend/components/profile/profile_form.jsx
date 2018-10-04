import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container.jsx";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <div className="search-bar-container">
        <NavbarContainer />
        <form id="profile-form" onSubmit="#">
          <input id="fullname-input" type="integer" placeholder="Full Name" />
          <input id="email-input" type="integer" placeholder="Email" />
          <input id="zipcode-input" type="integer" placeholder="Zipcode" />
          <input id="summary-input" type="integer" placeholder="Summary" />
          <input
            id="description-input"
            type="integer"
            placeholder="Description"
          />
          <input id="resume-input" type="integer" placeholder="Resume-Link" />
          <button id="profile-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;

// Category
// <input
//   id="amount-input"
//   type="integer"
//   placeholder="ie 'Dance' or 'Art'"
// />
// <br />
// location
// <input id="people-input" type="integer" placeholder="Zipcode" />
// <br />
