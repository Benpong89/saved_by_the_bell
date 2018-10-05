import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link className="nav-session-link" to="/login">
        Login
      </Link>
      <Link className="nav-session-link" to="/signup">
        Sign up
      </Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="greeting-container">
      <h2 className="greeting-username">Hi, {currentUser.username}!</h2>
      <div className="nav-link-box">
        <Link className="nav-session-link" to={`/users/${currentUser.id}`}>
          Profile
        </Link>
        <br />
        <Link className="nav-session-link" to="/main">
          Main page
        </Link>
        <br />
        <Link className="nav-session-link" to="/" onClick={logout}>
          Log Out
        </Link>
      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
