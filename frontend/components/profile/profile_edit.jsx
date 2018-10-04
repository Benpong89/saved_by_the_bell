import React from "react";
import { Link } from "react-router-dom";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar-container">
        <form id="search-form" onSubmit="#">
          Category
          <input
            id="amount-input"
            type="integer"
            placeholder="ie 'Dance' or 'Art'"
          />
          <br />
          location
          <input id="people-input" type="integer" placeholder="Zipcode" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
