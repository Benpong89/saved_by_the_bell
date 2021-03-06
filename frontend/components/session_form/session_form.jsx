import React from "react";
import { withRouter } from "react-router-dom";
import GreetingContainer from ".././greeting/greeting_container";
import NavbarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestlogin = this.guestlogin.bind(this);
    this.props.resetErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestlogin(e) {
    e.preventDefault();
    const randomUsers = [
      { username: "benpong89", password: "123456" },
      { username: "johnsmith90", password: "123456" },
      { username: "janedoe91", password: "123456" }
    ];

    const randomUser =
      randomUsers[Math.floor(Math.random() * randomUsers.length)];

    this.props.processForm(randomUser);
  }

  resetErrors() {
    this.setState({
      errors: []
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors-list" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <section className="session-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <label className="login-title">{this.props.formType}</label>
            <label className="session-errors-list">{this.renderErrors()}</label>
            <div className="login-form">
              <br />
              <label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="username"
                  className="login-input"
                />
              </label>
              <br />
              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="password"
                  className="login-input"
                />
              </label>
              <br />
              <button className="session-submit" type="submit">
                Submit
              </button>
              <br />
              <br />
              <button
                className={
                  "session-submit" +
                  (this.props.formType === "Volunteers sign up here!"
                    ? " hidden"
                    : "")
                }
                onClick={this.guestlogin}
              >
                Demo login
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
