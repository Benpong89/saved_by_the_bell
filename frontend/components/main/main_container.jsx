import { connect } from "react-redux";
import Main from "./main.jsx";
import { logout } from "../../actions/session_actions";

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
)(Main);
