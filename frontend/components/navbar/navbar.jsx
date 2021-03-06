import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "../greeting/greeting_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllProfiles();
    this.props.requestAllCategories();
    this.props.requestAllProfileCategories();

    if (this.props.currentUser) {
      this.props.requestUser(this.props.currentUser.id);
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <header className="clearfix">
          <div className="container">
            <br />
            <div className="header-left">
              <h1>
                <Link to="/">Saved by the Bell</Link>
              </h1>
            </div>
            <div id="view-volunteers" className="header-left">
              <Link className="learn-more" to="/main">
                View all volunteers
              </Link>
            </div>
            <div className="header-left">
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
