import {combineReducers} from "redux";
import {mainPage} from "@root/reducers/main-page/main-page";
import {data} from "@root/reducers/data/data";

export default combineReducers({
  mainPage,
  data,
});
