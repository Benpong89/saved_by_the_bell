import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ProfileShow from "./profile_show.jsx";

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
)(ProfileShow);
