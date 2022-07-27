import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Auth } from "./reducers/Auth";
// import { adminDashboard_red } from "./reducers/adminDashboard_red";

let AllReducers = combineReducers({
  Auth,
});

let store = createStore(AllReducers, applyMiddleware(thunk));

export default store;
