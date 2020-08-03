import {UserActionTypes} from "@constants/action-types";
import {Film} from "@root/types";
import {UserActions} from "@components/sign-in/types";

export const setFavorite = (films: Film[]): UserActions => ({
  type: UserActionTypes.SET_FAVORITE,
  payload: films,
});
