import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfileForm from "./profile_form";
import { createProfile } from "../../actions/profile_actions.js";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { profiles },
  entities: { categories }
}) => {
  return {
    profiles: Object.values(profiles),
    categories: Object.values(categories),
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  createProfile: profile => dispatch(createProfile(profile)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
