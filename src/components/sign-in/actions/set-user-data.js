import {UserActionTypes} from "@constants/action-types";

export const setUserData = (userData) => ({
  type: UserActionTypes.SET_USER_DATA,
  payload: userData,
});
