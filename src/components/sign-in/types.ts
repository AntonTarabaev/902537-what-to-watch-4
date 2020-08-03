import {AuthorizationStatus, Film, User} from "@root/types";
import {UserActionTypes} from "@constants/action-types";

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  userData: User;
  favoriteFilms: Film[];
}

interface RequireAuthorizationAction {
  type: typeof UserActionTypes.REQUIRED_AUTHORIZATION;
  payload: AuthorizationStatus;
}

interface SetUserDataAction {
  type: typeof UserActionTypes.SET_USER_DATA;
  payload: User;
}

interface SetFavoriteAction {
  type: typeof UserActionTypes.SET_FAVORITE;
  payload: Film[];
}

export type UserActions = RequireAuthorizationAction | SetUserDataAction | SetFavoriteAction;
