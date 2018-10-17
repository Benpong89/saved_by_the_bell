import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import NavbarContainer from "../navbar/navbar_container.jsx";
import ProfileIndexContainer from "../profile/profile_index_container.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <NavbarContainer />
        <ProfileIndexContainer />
      </div>
    );
  }
}

export default withRouter(Main);
