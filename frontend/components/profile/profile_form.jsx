import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
import { merge } from "lodash";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.profile.id,
      fullname: this.props.currentUser.profile.fullname,
      email: this.props.currentUser.profile.email,
      zipcode: this.props.currentUser.profile.zipcode,
      summary: this.props.currentUser.profile.summary,
      description: this.props.currentUser.profile.description,
      resumeLink: this.props.currentUser.profile.resumeLink,
      user_id: this.props.currentUser.id,
      hide_edit: this.props.currentUser.profile ? false : true
    };
    this.createProfile = this.createProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  createProfile(e) {
    e.preventDefault();
    const profile = {
      fullname: this.state.fullname,
      email: this.state.email,
      zipcode: this.state.zipcode,
      summary: this.state.summary,
      description: this.state.description,
      resumeLink: this.state.resumeLink,
      user_id: this.props.currentUser.id
    };
    this.props.createProfile(profile);
    this.setState({
      id: this.props.currentUser.profile.id,
      fullname: profile.fullname,
      email: profile.email,
      zipcode: profile.zipcode,
      summary: profile.summary,
      description: profile.description,
      resumeLink: profile.resumeLink,
      user_id: this.props.currentUser.id,
      hide_edit: false
    });
  }

  updateProfile(e) {
    e.preventDefault();
    const profile = {
      id: this.props.currentUser.profile.id,
      fullname: this.state.fullname,
      email: this.state.email,
      zipcode: this.state.zipcode,
      summary: this.state.summary,
      description: this.state.description,
      resumeLink: this.state.resumeLink,
      user_id: this.props.currentUser.id
    };
    this.props.updateProfile(profile);
    this.setState({
      id: this.props.currentUser.profile.id,
      fullname: this.state.fullname,
      email: this.state.email,
      zipcode: this.state.zipcode,
      summary: this.state.summary,
      description: this.state.description,
      resumeLink: this.state.resumeLink,
      user_id: this.props.currentUser.id,
      hide_edit: false
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    const list1 = this.props.categories.slice(0, 5);
    const list2 = this.props.categories.slice(5, 10);
    const list3 = this.props.categories.slice(10, 15);

    const categoriesList1 = list1.map((category, idx) => {
      return (
        <div key={idx} id="category-form-container">
          <button key={idx}>{category.category}</button>
        </div>
      );
    });
    const categoriesList2 = list2.map((category, idx) => {
      return (
        <div key={idx} id="category-form-container">
          <button key={idx}>{category.category}</button>
        </div>
      );
    });
    const categoriesList3 = list3.map((category, idx) => {
      return (
        <div key={idx} id="category-form-container">
          <button key={idx}>{category.category}</button>
        </div>
      );
    });

    return (
      <div className="splash-container">
        <NavbarContainer />
        <section className="clearfix">
          <div id="profile-form-instructions-box">
            <h1>Welcome! Steps to create a profile</h1>
            <ul id="profile-form-instructions">
              <li>Submit the basic information for your profile</li>
              <li>
                Pair your profile with categories to make it easier for teachers
                to find you
              </li>
              <li>When you're ready, publish your profile.</li>
            </ul>
            <form
              id="profile-form"
              onSubmit={
                this.props.currentUser.profile
                  ? this.updateProfile
                  : this.createProfile
              }
            >
              <input
                id="fullname-input"
                type="integer"
                placeholder="Full Name"
                value={this.state.fullname}
                onChange={this.update("fullname")}
              />
              <input
                id="email-input"
                type="integer"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
              />
              <input
                id="zipcode-input"
                type="integer"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.update("zipcode")}
              />
              <input
                id="resume-input"
                type="integer"
                placeholder="Resume-Link"
                value={this.state.resumeLink}
                onChange={this.update("resumeLink")}
              />
              <textarea
                id="summary-input"
                type="integer"
                placeholder="Summary"
                value={this.state.summary}
                onChange={this.update("summary")}
              />
              <textarea
                id="description-input"
                type="integer"
                placeholder="Description"
                value={this.state.description}
                onChange={this.update("description")}
              />
              <button
                className="profile-form-submit"
                disabled={!this.state.fullname || !this.state.email}
                type="submit"
              >
                Create Profile!
              </button>
            </form>
          </div>
          <div
            id="profile-form2"
            className={this.state.hide_edit ? "hidden" : ""}
          >
            <img className="profile-img-large" src={window.defaultprofileURL} />
            Upload a profile picture
            <div className="ul-container">
              <h2>Choose Categories</h2>
              <ul className="categories-list">{categoriesList1}</ul>
              <ul className="categories-list">{categoriesList2}</ul>
              <ul className="categories-list">{categoriesList3}</ul>
            </div>
            <button id="publish-button">PUBLISH</button>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileForm;

// <Link to={`/users/${currentUser.id}/category`}>Link your Profile to Categories</Link>

// <div>Categories</div>
// <ul>{categoriesList}</ul>

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
