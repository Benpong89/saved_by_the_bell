import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "../greeting/greeting_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <header className="clearfix">
          <div className="container">
            <div className="header-left">
              <h1>
                <Link to="/">Saved By the Bell</Link>
              </h1>
            </div>
            <div className="header-right">
              <label>
                <span className="hidden-desktop" />
              </label>
              <input type="checkbox" name="" id="open" />
              <GreetingContainer />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;

// <button className="learn-more">View all volunteers</button>
