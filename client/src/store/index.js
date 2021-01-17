import { combineReducers } from "redux";
import users from "./users";
import register from "./register";
import sort from "./sort";

const root = combineReducers({
    register,
    users,
    sort
});
export default root;