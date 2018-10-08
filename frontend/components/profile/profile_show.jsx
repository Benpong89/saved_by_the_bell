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
      profile => profile.user_id === this.props.currentUser.id
    );

    return (
      <div className="splash-container">
        <NavbarContainer />
        <section className="clearfix">
          <ul>Current Profile info</ul>
        </section>
      </div>
    );
  }
}

export default ProfileShow;

// const profileItems = Object.keys(currentProfile).map(prop => {
//   return (
//     <li>
//       {currentProfile[prop]}
//     </li>
//   );
// });
