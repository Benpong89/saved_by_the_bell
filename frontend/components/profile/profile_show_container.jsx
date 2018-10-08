import { connect } from "react-redux";
import ProfileShow from "./profile_show";
import { requestProfile } from "../../actions/profile_actions.js";
import { requestUser } from "../../actions/session_actions.js";

const mapStateToProps = ({
  session,
  entities: { users },
  entities: { profiles },
  entities: { categories },
  entities: { profile_categories }
}) => {
  return {
    profiles: Object.values(profiles),
    categories: Object.values(categories),
    profile_categories: Object.values(profile_categories),
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  requestProfile: id => dispatch(requestProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);
