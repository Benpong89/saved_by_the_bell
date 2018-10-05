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
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    const categoriesList = this.props.categories.map((category, idx) => {
      return (
        <div id="category-form-container">
          <button key={idx}>{category.category}</button>;
        </div>
      );
    });

    return (
      <div className="splash-container">
        <NavbarContainer />
        <section className="clearfix">
          <div id="profile-form-box">
            <img className="profile-img-large" src={window.defaultprofileURL} />
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
                Submit
              </button>
            </form>
            <button className="profile-form-submit">Publish</button>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileForm;

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
