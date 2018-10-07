import {
  RECEIVE_PROFILE_CATEGORY,
  RECEIVE_ALL_PROFILE_CATEGORIES,
  REMOVE_PROFILE_CATEGORY
} from ".././actions/profile_category_actions";
import { merge } from "lodash";

const profile_categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE_CATEGORY:
      let newState = merge({}, state);
      newState[action.profile_category.id] = action.profile_category;
      return newState;
    case RECEIVE_ALL_PROFILE_CATEGORIES:
      return merge({}, action.profile_categories);
    case REMOVE_PROFILE_CATEGORY:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default profile_categoriesReducer;
