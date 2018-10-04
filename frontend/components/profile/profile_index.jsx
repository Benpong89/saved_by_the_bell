import React from "react";
import { Link } from "react-router-dom";
import ProfileIndexItem from "./profile_index_item";

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-index-container">
        <ul>
          <ProfileIndexItem />
        </ul>
      </div>
    );
  }
}

export default ProfileIndex;
