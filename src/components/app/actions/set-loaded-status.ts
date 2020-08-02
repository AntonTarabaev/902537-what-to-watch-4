import {AppActionTypes} from "@constants/action-types";
import {DataActions} from "../types";

export const setLoadedStatus = (): DataActions => ({
  type: AppActionTypes.SET_LOADED_STATUS,
  payload: true,
});
