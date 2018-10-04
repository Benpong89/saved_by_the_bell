import React from "react";
import { Link } from "react-router-dom";

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
              <h1>Saved By the Bell</h1>
            </div>
            <div className="header-right">
              <label>
                <span className="hidden-desktop" />
              </label>
              <input type="checkbox" name="" id="open" />
              <nav>
                <a href="#/login">Login</a>
                <a href="#/signup">Sign Up</a>
              </nav>
            </div>
          </div>
        </header>
        <section className="clearfix">
          <div className="container">
            <div className="section-left">
              <h1 className="section-title">
                See our After School program volunteers
              </h1>
              <h5 className="section-tagline" />
            </div>
            <div className="section-right">
              <button className="learn-more">View all volunteers</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
