import React from "react";
import { Link } from "react-router-dom";

const ProfileIndexItem = ({ profile }) => {
  return (
    <div className="profile-index-li-container">
      <img className="profile-img" src={window.defaultprofileURL} />
      <li className="profile-index-item">
        <span>{profile.fullname}</span>
        <div>{profile.summary}</div>
        <div>{profile.description}</div>
        <div>{profile.email}</div>
        <div>{profile.zipcode}</div>
      </li>
    </div>
  );
};

export default ProfileIndexItem;
