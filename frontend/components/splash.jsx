import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavbarContainer from "./navbar/navbar_container";
import GreetingContainer from "./greeting/greeting_container";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <NavbarContainer />
        <section id="splash-section" className="clearfix">
          <div className="container">
            <div>
              <h1 className="section-title">What we do</h1>
            </div>
            <p>
              Saved by the Bell is a free resource for public school teachers
              seeking volunteers to facilitate after school programs. Public
              schools often overlook the importance of after school programs,
              and may not have the resources to recruit volunteers. Our mission
              is to close this gap by bringing the volunteers to the teachers
              with Saved By the Bell.
            </p>
          </div>

          <div className="container">
            <div>
              <h1 className="section-title">How it works</h1>
            </div>
            <p>
              Prospective volunteers can create a profile and list their
              availability, specialties by category, location and other relevant
              information. Teachers can search through published volunteer
              profiles and directly contact the volunteers.
            </p>
          </div>

          <div className="container">
            <div>
              <h1 className="section-title">How you can help</h1>
            </div>
            <p>
              “Life’s most persistent and urgent question is, <br /> What are
              you doing for others?” — Martin Luther King, Jr.
              <br /> <br />Volunteering can be as easy as facilitating an
              existing after school program for one afternoon, tutoring a
              student preparing for the SATs, or teaching a dance class once a
              week.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Splash);
