import React from "react";
import { Link } from "react-router-dom";

const ProfileIndexItem = ({ profile }) => {
  return (
    <li className="profile-index-item">
      <span>{profile.id}</span>
      <span>{profile.fullname}</span>
      <div>{profile.summary}</div>
      <div>{profile.description}</div>
      <div>{profile.email}</div>
      <div>{profile.zipcode}</div>
    </li>
  );
};

export default ProfileIndexItem;
