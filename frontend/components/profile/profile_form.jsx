import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
import { merge } from "lodash";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      zipcode: "",
      summary: "",
      description: "",
      resumeLink: "",
      user_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const profile = merge({}, this.state);
    this.props.createProfile(profile);
    this.setState({
      fullname: "",
      email: "",
      zipcode: "",
      summary: "",
      description: "",
      resumeLink: "",
      user_id: this.props.currentUser.id
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
        <div id="category-form-container">
          <button key={idx}>{category.category}</button>
        </div>
      );
    });
    const categoriesList2 = list2.map((category, idx) => {
      return (
        <div id="category-form-container">
          <button key={idx}>{category.category}</button>
        </div>
      );
    });
    const categoriesList3 = list3.map((category, idx) => {
      return (
        <div id="category-form-container">
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
            <form id="profile-form" onSubmit={this.handleSubmit}>
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
              <button className="profile-form-submit" type="submit">
                Save as draft
              </button>
            </form>
          </div>
          <div id="profile-form2">
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
