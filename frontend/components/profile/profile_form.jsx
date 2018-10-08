import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
import { merge } from "lodash";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.currentUser.profile) {
      this.state = {
        id: this.props.currentUser.profile.id,
        fullname: this.props.currentUser.profile.fullname,
        email: this.props.currentUser.profile.email,
        zipcode: this.props.currentUser.profile.zipcode,
        summary: this.props.currentUser.profile.summary,
        description: this.props.currentUser.profile.description,
        resumeLink: this.props.currentUser.profile.resumeLink,
        user_id: this.props.currentUser.id,
        published: this.props.currentUser.profile.published,
        hide_edit: false,
        created: true
      };
    } else {
      this.state = {
        id: "",
        fullname: "",
        email: "",
        zipcode: "",
        summary: "",
        description: "",
        resumeLink: "",
        user_id: "",
        published: false,
        created: false,
        hide_edit: true
      };
    }
    this.createProfile = this.createProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.createProfileCategory = this.createProfileCategory.bind(this);
    this.deleteProfileCategory = this.deleteProfileCategory.bind(this);
    this.publishProfile = this.publishProfile.bind(this);
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
    this.props
      .createProfile(profile)
      .then(this.props.requestUser(this.props.currentUser.id));
    this.setState({
      fullname: profile.fullname,
      email: profile.email,
      zipcode: profile.zipcode,
      summary: profile.summary,
      description: profile.description,
      resumeLink: profile.resumeLink,
      user_id: this.props.currentUser.id,
      hide_edit: false,
      created: true
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
      hide_edit: false,
      created: true
    });
  }

  publishProfile(e) {
    e.preventDefault();
    this.props.updateProfile({
      id: this.props.currentUser.profile.id,
      published: !this.props.currentUser.profile.published
    });
    const published = !this.state.published;
    this.setState({ published });
  }

  createProfileCategory(category_id) {
    return e => {
      e.preventDefault();
      const profileCategory = {
        profile_id: this.props.currentUser.profile.id,
        category_id: category_id
      };
      this.props.createProfileCategory(profileCategory);
    };
  }

  deleteProfileCategory(category_id) {
    return e => {
      e.preventDefault();
      const profile_category_id = this.props.profile_categories.find(
        obj =>
          obj.profile_id === this.props.currentUser.profile.id &&
          obj.category_id === category_id
      ).id;
      this.props.deleteProfileCategory(profile_category_id);
    };
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

    const categoriesList1 = list1.map((categories, idx) => {
      return (
        <div key={idx} id="category-form-container">
          <button
            onClick={
              this.props.currentUser.profile &&
              this.props.profile_categories
                .filter(
                  obj => obj.profile_id === this.props.currentUser.profile.id
                )
                .map(categories => categories.category_id)
                .includes(categories.id)
                ? this.deleteProfileCategory(categories.id)
                : this.createProfileCategory(categories.id)
            }
          >
            {categories.category}
          </button>
        </div>
      );
    });
    const categoriesList2 = list2.map((categories, idx) => {
      return (
        <div key={idx} id="category-form-container">
          <button
            onClick={
              this.props.currentUser.profile &&
              this.props.profile_categories
                .filter(
                  obj => obj.profile_id === this.props.currentUser.profile.id
                )
                .map(categories => categories.category_id)
                .includes(categories.id)
                ? this.deleteProfileCategory(categories.id)
                : this.createProfileCategory(categories.id)
            }
          >
            {categories.category}
          </button>
        </div>
      );
    });
    const categoriesList3 = list3.map((categories, idx) => {
      return (
        <div key={idx} id="category-form-container">
          <button
            onClick={
              this.props.currentUser.profile &&
              this.props.profile_categories
                .filter(
                  obj => obj.profile_id === this.props.currentUser.profile.id
                )
                .map(categories => categories.category_id)
                .includes(categories.id)
                ? this.deleteProfileCategory(categories.id)
                : this.createProfileCategory(categories.id)
            }
          >
            {categories.category}
          </button>
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
                {this.state.created
                  ? "Update your profile"
                  : "Create a Profile"}
              </button>
            </form>
          </div>
          <div
            id="profile-form2"
            className={this.state.hide_edit ? "hidden" : ""}
          >
            <div className="ul-container">
              <h2>Choose Categories</h2>
              <ul className="categories-list">{categoriesList1}</ul>
              <ul className="categories-list">{categoriesList2}</ul>
              <ul className="categories-list">{categoriesList3}</ul>
            </div>
            <button onClick={this.publishProfile} id="publish-button">
              {this.props.currentUser.profile && this.state.published
                ? "UNPUBLISH"
                : "PUBLISH"}
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileForm;

// <img className="profile-img-large" src={window.defaultprofileURL} />
// Upload a profile picture

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
