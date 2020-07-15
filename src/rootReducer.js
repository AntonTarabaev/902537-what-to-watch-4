import {combineReducers} from "redux";
import {mainPage} from "@components/main/reducer/main-page";
import {data} from "@components/app/reducer/data";

export default combineReducers({
  mainPage,
  data,
});
