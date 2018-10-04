import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container.jsx";
import NavbarContainer from "../navbar/navbar_container.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <NavbarContainer />
        <SearchBarContainer />
      </div>
    );
  }
}

export default withRouter(Main);
