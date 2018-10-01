import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session from "./session_reducer";

const rootReducer = combineReducers({
  entities,
  session
});

export default rootReducer;
