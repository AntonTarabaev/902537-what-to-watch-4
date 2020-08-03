import {AuthorizationStatus} from "@root/types";
import {UserActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";
import {UserActions, UserState} from "@components/sign-in/types";

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: null,
  favoriteFilms: [],
};

export const user = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case UserActionTypes.SET_USER_DATA:
      return extend(state, {
        userData: action.payload,
      });

    case UserActionTypes.SET_FAVORITE:
      return extend(state, {
        favoriteFilms: action.payload,
      });

    default:
      return state;
  }
};
