import {AuthorizationStatus} from "@constants/main";
import {UserActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    default:
      return state;
  }
};
