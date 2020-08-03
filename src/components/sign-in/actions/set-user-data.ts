import {UserActionTypes} from "@constants/action-types";
import {User} from "@root/types";
import {UserActions} from "@components/sign-in/types";

export const setUserData = (userData: User): UserActions => ({
  type: UserActionTypes.SET_USER_DATA,
  payload: userData,
});
