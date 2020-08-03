import {UserActionTypes} from "@constants/action-types";
import {AuthorizationStatus} from "@root/types";
import {UserActions} from "@components/sign-in/types";

export const requireAuthorization = (status: AuthorizationStatus): UserActions => ({
  type: UserActionTypes.REQUIRED_AUTHORIZATION,
  payload: status,
});
