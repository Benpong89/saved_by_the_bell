import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavbarContainer from "./navbar/navbar_container";
import GreetingContainer from "./greeting/greeting_container";
import SearchBarContainer from "./search_bar/search_bar_container";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <NavbarContainer />
        <section className="clearfix">
          <div className="container">
            <div className="section-left">
              <h1 className="section-title">
                See our After School program volunteers
              </h1>
              <h5 className="section-tagline" />
            </div>
            <div className="section-right">
              <Link className="learn-more" to="/main">
                View all volunteers
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Splash);
