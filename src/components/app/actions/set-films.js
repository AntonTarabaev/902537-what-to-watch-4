import {AppActionTypes} from "@constants/action-types";

export const setFilms = (films) => ({
  type: AppActionTypes.SET_FILMS,
  payload: films,
});
