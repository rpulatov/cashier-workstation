import { combineReducers } from "redux";

import checkPositions from "./checkPositions";
import auth from "./auth";
import notification from "./notification";
import goods from "./goods";

export default combineReducers({ checkPositions, auth, notification, goods });
