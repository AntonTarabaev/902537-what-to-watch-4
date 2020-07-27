import {AppActionTypes} from "@constants/action-types";

export const setFilmIsFavorite = (film) => {
  return {
    type: AppActionTypes.SET_FILM_IS_FAVORITE,
    payload: film,
  };
};
