import {combineReducers} from "redux";
import {mainPage} from "@components/main/reducer/main-page";
import {data} from "@components/app/reducer/data";
import {user} from "@components/sign-in/reducer/user";

export default combineReducers({
  mainPage,
  data,
  user,
});
