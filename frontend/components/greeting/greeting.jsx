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
      <Link to={`/users/${currentUser.id}`}>Link to user Profile</Link>
      <h2 className="greeting-username">Hi, {currentUser.username}!</h2>
      <Link className="nav-session-link" to="/" onClick={logout}>
        Log Out
      </Link>
      <br />
      <Link className="nav-session-link" to="/main">
        Main page
      </Link>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
