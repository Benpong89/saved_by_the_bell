import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import SearchBarContainer from "../search_bar/search_bar_container.jsx";
import NavbarContainer from "../navbar/navbar_container.jsx";
import ProfileFormContainer from "../profile/profile_form_container.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Link to={`/users/${this.props.currentUser.id}`}>
          Link to user Profile
        </Link>
        <NavbarContainer />
        This is the Main Page
        <SearchBarContainer />
      </div>
    );
  }
}

export default withRouter(Main);

// <Route
//   exact
//   path={`/users/${this.props.currentUser.id}`}
//   component={ProfileFormContainer}
// />
// <Route exact path="/main" component={MainContainer} />
