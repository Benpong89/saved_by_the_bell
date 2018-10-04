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
        <SearchBarContainer />
        <div>Search results below</div>
      </div>
    );
  }
}

export default withRouter(Splash);
