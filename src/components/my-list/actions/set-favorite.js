import {UserActionTypes} from "@constants/action-types";

export const setFavorite = (films) => ({
  type: UserActionTypes.SET_FAVORITE,
  payload: films,
});
