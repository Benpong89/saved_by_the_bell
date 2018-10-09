import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProfile(parseInt(this.props.match.params.profileId));
  }

  render() {
    if (this.props.profiles.length === 0) return null;

    const currentProfile = this.props.profiles.find(
      profile => profile.id === parseInt(this.props.match.params.profileId)
    );

    return (
      <div className="splash-container">
        <NavbarContainer />
        <section className="clearfix">
          <ul className="profile-show-ul">
            <img className="profile-img-large" src={window.defaultprofileURL} />
            <li>Fullname: {currentProfile.fullname}</li>
            <li>Email: {currentProfile.email}</li>
            <li>Zipcode: {currentProfile.zipcode}</li>
            <li>Summary: {currentProfile.summary}</li>
            <li>Description: {currentProfile.description}</li>
            <li>resumeLink: {currentProfile.resumeLink}</li>
          </ul>
          <div className="profile-show-ul">
            <h1>{currentProfile.fullname}s Profile </h1>
            <h2>
              Do I look like a good fit for your after school program?
              <br />
              Send me an email today!
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileShow;
