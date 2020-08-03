import {AppActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";
import {DataActions, DataState} from "../types";

const initialState: DataState = {
  films: [],
  promo: null,
  comments: [],
  isLoaded: false,
};

export const data = (state = initialState, action: DataActions) => {
  switch (action.type) {
    case AppActionTypes.SET_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case AppActionTypes.SET_PROMO:
      return extend(state, {
        promo: action.payload,
      });

    case AppActionTypes.SET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

    case AppActionTypes.SET_LOADED_STATUS:
      return extend(state, {
        isLoaded: action.payload,
      });

    case AppActionTypes.SET_FILM_IS_FAVORITE:
      const targetFilmIndex = state.films.findIndex((it) => it.id === action.payload.id);
      const newFilms = [].concat(state.films.slice(0, targetFilmIndex), action.payload, state.films.slice(targetFilmIndex + 1));

      if (state.promo.id === action.payload.id) {
        return extend(state, {
          films: newFilms,
          promo: action.payload,
        });
      }

      return extend(state, {
        films: newFilms,
      });

    default:
      return state;
  }
};
