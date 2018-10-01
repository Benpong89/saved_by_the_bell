import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="splash-container">Splash Test</div>;
  }
}

export default withRouter(Splash);
