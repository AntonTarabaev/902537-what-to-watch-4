import {AppActionTypes} from "@constants/action-types";
import {Film} from "@root/types";
import {DataActions} from "@components/app/types";

export const setFilmIsFavorite = (film: Film): DataActions => {
  return {
    type: AppActionTypes.SET_FILM_IS_FAVORITE,
    payload: film,
  };
};
