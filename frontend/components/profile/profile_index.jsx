import React from "react";
import { Link } from "react-router-dom";
import ProfileIndexItem from "./profile_index_item";
import SearchBarContainer from "../search_bar/search_bar_container.jsx";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["fullname", "zipcode"];

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const profilesList = this.props.profiles.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <section className="profile-index-container">
        <h2 className="section-title">Search here for volunteers!</h2>
        <SearchInput
          placeholder="Name, Category, or Zipcode"
          className="search-input"
          onChange={this.searchUpdated}
        />

        {profilesList.map(profile => {
          return (
            <div className="profile-index-li-container">
              <img className="profile-img" src={window.defaultprofileURL} />
              <li className="profile-index-item">
                <div>Name: {profile.fullname}</div>
                <div> Summary: {profile.summary}</div>
                <div>ZIP Code: {profile.zipcode}</div>
                <div>Categories: </div>
              </li>
            </div>
          );
        })}
      </section>
    );
  }
}

export default ProfileIndex;

// <ul className="profile-index-item-ul">
//   {this.props.profiles.map((profile, idx) => (
//     <ProfileIndexItem key={idx} profile={profile} />
//   ))}
// </ul>;

// <div className="profile-index-li-container">
//   <img className="profile-img" src={window.defaultprofileURL} />
//   <li className="profile-index-item">
//     <span>{profile.fullname}</span>
//     <div>{profile.summary}</div>
//     <div>{profile.description}</div>
//     <div>{profile.email}</div>
//     <div>{profile.zipcode}</div>
//   </li>
// </div>
//
