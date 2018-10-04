import { RECEIVE_CURRENT_CATEGORY } from ".././actions/category_actions";
import { merge } from "lodash";

const currentCategoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_CATEGORY:
      return merge({}, { [action.category.id]: action.category });
    default:
      return state;
  }
};

export default currentCategoryReducer;
