import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfileIndex from "./profile_index";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
