import {
  RECEIVE_CATEGORY,
  RECEIVE_ALL_CATEGORIES
} from ".././actions/category_actions";
import { merge } from "lodash";

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      const newState = merge({}, state);
      newState[action.category.id] = action.category;
      return newState;
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, action.categories);
    default:
      return state;
  }
};

export default categoriesReducer;
