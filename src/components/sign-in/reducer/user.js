import {AuthorizationStatus} from "@constants/main";
import {UserActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  favoriteFilms: [],
};

export const user = (state = initialState, action) => {
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
