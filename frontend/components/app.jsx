import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
// import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import SignInFormContainer from "./session_form/signin_form_container";
import MainContainer from "./main/main_container";
import Splash from "./splash";
import ProfileFormContainer from "./profile/profile_form_container";
import ProfileShowContainer from "./profile/profile_show_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="root-container">
        <Switch>
          <Route exact path="/" component={Splash} />
          <AuthRoute exact path="/login" component={SignInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <Route exact path="/main" component={MainContainer} />
          <ProtectedRoute
            exact
            path="/users/:userId"
            component={ProfileFormContainer}
          />
          <Route
            exact
            path="/profiles/:profileId"
            component={ProfileShowContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
