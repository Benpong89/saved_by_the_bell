import { combineReducers } from "redux";
import users from "./users_reducer";
import profiles from "./profiles_reducer";
import categories from "./category_reducer";
import profile_categories from "./profile_category_reducer";

export default combineReducers({
  users,
  profiles,
  categories,
  profile_categories
});
