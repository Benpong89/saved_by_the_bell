import React from "react";
import { withRouter } from "react-router-dom";
import GreetingContainer from ".././greeting/greeting_container";
import NavbarContainer from "../navbar/navbar_container.jsx";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.guestlogin = this.guestlogin.bind(this);
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

  // guestlogin(e) {
  //   e.preventDefault();
  //   const randomUsers = [
  //     { username: "Tony Stark", password: "123456" },
  //   ];
  //
  //   const randomUser =
  //     randomUsers[Math.floor(Math.random() * randomUsers.length)];
  //
  //   this.props.processForm(randomUser);
  // }

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
      <div className="session-form-container">
        <NavbarContainer />
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
                placeholder="username goes here"
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="password goes here"
                className="login-input"
              />
            </label>
            <br />
            <button className="session-submit" type="submit">
              Continue
              {"\u2192"}
            </button>
            <br />
            <button
              className={
                "session-submit" +
                (this.props.formType === "Sign up here!" ? " hidden" : "")
              }
              onClick={this.guestlogin}
            >
              Be my guest!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

// <div className="login-form-container">
//   <header className="splash-header">
//     <div className="logo-nav">
//       <Link to="/">
//         <img className="img-logo" src={window.newlogoURL} />
//       </Link>
//       <Link className="text-logo" to="/">
//         <h1 className="text-logo">Saved by the Bell</h1>
//       </Link>
//     </div>
//     <GreetingContainer />
//   </header>
// </div>
//
