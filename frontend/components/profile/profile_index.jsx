import React from "react";
import { Link } from "react-router-dom";
import ProfileIndexItem from "./profile_index_item";
import SearchBarContainer from "../search_bar/search_bar_container.jsx";

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="profile-index-container">
        <SearchBarContainer />
        <ul className="profile-index-item-ul">
          {this.props.profiles.map((profile, idx) => (
            <ProfileIndexItem key={idx} profile={profile} />
          ))}
        </ul>
      </section>
    );
  }
}

export default ProfileIndex;
