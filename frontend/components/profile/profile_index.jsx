import React from "react";
import { Link } from "react-router-dom";
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
        <div className="profile-index-ul-container">
          {profilesList.map((profile, idx) => {
            const zip =
              String(profile.zipcode).length < 5
                ? "0" + profile.zipcode
                : profile.zipcode;

            return (
              <div key={idx} className="profile-index-li-container">
                <img className="profile-img" src={window.defaultprofileURL} />

                <li className="profile-index-item">
                  <Link
                    className="nav-session-link"
                    to={`/profiles/${profile.id}`}
                  >
                    View Profile
                  </Link>
                  <div>Name: {profile.fullname}</div>
                  <div> Summary: {profile.summary}</div>
                  <div>ZIP Code: {zip}</div>
                  <div className="profile-index-item">
                    Categories:
                    {profile.categories.map(category =>
                      category.category.concat(", ")
                    )}
                  </div>
                </li>
              </div>
            );
          })}
        </div>
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
