import {AppActionTypes} from "@constants/action-types";

export const setLoadedStatus = () => ({
  type: AppActionTypes.SET_LOADED_STATUS,
  payload: true,
});
