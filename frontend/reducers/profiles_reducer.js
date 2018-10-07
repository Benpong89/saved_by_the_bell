import {
  RECEIVE_PROFILE,
  RECEIVE_ALL_PROFILES,
  REMOVE_PROFILE
} from ".././actions/profile_actions";
import { merge } from "lodash";

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      let newState = merge({}, state);
      newState[action.profile.id] = action.profile;
      return newState;
    case RECEIVE_ALL_PROFILES:
      return merge({}, action.profiles);
    case REMOVE_PROFILE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default profilesReducer;
