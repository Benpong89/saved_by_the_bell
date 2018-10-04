import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfileEdit from "./profile_edit";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
