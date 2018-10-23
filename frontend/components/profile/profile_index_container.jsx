import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfileIndex from "./profile_index";
import { requestAllProfiles } from "../../actions/profile_actions.js";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { profiles }
}) => {
  return {
    profiles: Object.values(profiles),
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestAllProfiles: profiles => dispatch(requestAllProfiles(profiles))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
