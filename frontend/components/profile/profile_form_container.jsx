import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { createProfile, updateProfile } from "../../actions/profile_actions.js";
import {
  createProfileCategory,
  deleteProfileCategory
} from "../../actions/profile_category_actions.js";

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
  updateProfile: profile => dispatch(updateProfile(profile)),
  createProfileCategory: profile_category =>
    dispatch(createProfileCategory(profile_category)),
  deleteProfileCategory: id => dispatch(deleteProfileCategory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
