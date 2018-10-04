import { RECEIVE_CURRENT_PROFILE } from ".././actions/profile_actions";
import { merge } from "lodash";

const currentProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_PROFILE:
      return merge({}, { [action.profile.id]: action.profile });
    default:
      return state;
  }
};

export default currentProfileReducer;
