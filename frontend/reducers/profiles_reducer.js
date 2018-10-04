import {
  RECEIVE_PROFILE,
  RECEIVE_ALL_PROFILES
} from ".././actions/profile_actions";
import { merge } from "lodash";

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      const newState = merge({}, state);
      newState[action.profile.id] = action.profile;
      return newState;
    case RECEIVE_ALL_PROFILES:
      return merge({}, action.profiles);
    default:
      return state;
  }
};

export default profilesReducer;