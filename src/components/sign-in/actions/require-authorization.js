import {UserActionTypes} from "@constants/action-types";

export const requireAuthorization = (status) => ({
  type: UserActionTypes.REQUIRED_AUTHORIZATION,
  payload: status,
});
