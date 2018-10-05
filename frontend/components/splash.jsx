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
            <div>
              <h1 className="section-title">What we do</h1>
            </div>
            <p>
              Saved by the Bell is a free resource for public school teachers
              seeking volunteers to facilitate After School programs. Public
              schools often overlook the importance of After-School programming
              and may not have the resources to recruit volunteers. Our mission
              is close this gap, by bringing the volunteers to the teachers with
              Saved By the Bell.
            </p>
          </div>

          <div className="container">
            <div>
              <h1 className="section-title">How it works</h1>
            </div>
            <p>
              Prospective volunteers can create an account and list their
              availability, specialties by category, location and other relevant
              information. Teachers can search through published volunteer
              profiles by category, location, or name and directly contact the
              volunteers.
            </p>
          </div>

          <div className="container">
            <div>
              <h1 className="section-title">How you can help</h1>
            </div>
            <p>
              “Life’s most persistent and urgent question is, What are you doing
              for others?” — Martin Luther King, Jr. Volunteering can be as easy
              as proctoring an existing after school program for one day,
              tutoring a student preparing for the SATs, or teaching a dance
              class once a week. One hour of your time can make a world of a
              difference to students in your community.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Splash);

// <section className="clearfix">
//   <div className="container">
//     <div className="section-left">
//       <h1 className="section-title">See our volunteers!</h1>
//     </div>
//     <div className="section-right">
//       <Link className="learn-more" to="/main">
//         View all volunteers
//       </Link>
//     </div>
//   </div>
//
//   <br />
