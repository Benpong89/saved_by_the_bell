import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { requestAllProfiles } from "../../actions/profile_actions.js";
import { requestAllCategories } from "../../actions/category_actions.js";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestAllProfiles: profiles => dispatch(requestAllProfiles(profiles)),
  requestAllCategories: categories => dispatch(requestAllCategories(categories))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
