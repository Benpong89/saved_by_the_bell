import { combineReducers } from "redux";
import currentProfile from "./current_profile_reducer";
import currentCategory from "./current_category_reducer";
// import modal from "./modal_reducer";

export default combineReducers({
  currentProfile,
  currentCategory
});
