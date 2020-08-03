import {Comment, Film} from "@root/types";
import {AppActionTypes} from "@constants/action-types";

export interface DataState {
  films: Film[];
  promo: Film;
  comments: Comment[];
  isLoaded: boolean;
}

interface SetFilmsAction {
  type: typeof AppActionTypes.SET_FILMS;
  payload: Film[];
}

interface SetPromoAction {
  type: typeof AppActionTypes.SET_PROMO;
  payload: Film;
}

interface SetCommentsAction {
  type: typeof AppActionTypes.SET_COMMENTS;
  payload: Comment[];
}

interface SetLoadedStatusAction {
  type: typeof AppActionTypes.SET_LOADED_STATUS;
  payload: boolean;
}

interface SetFilmIsFavoriteAction {
  type: typeof AppActionTypes.SET_FILM_IS_FAVORITE;
  payload: Film;
}

export type DataActions = SetCommentsAction | SetFilmIsFavoriteAction | SetFilmsAction | SetPromoAction | SetLoadedStatusAction;
