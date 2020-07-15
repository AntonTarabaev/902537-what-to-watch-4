import {FilmSettings} from "@constants/main";
import {MainPageActionTypes} from "@constants/action-types";

export const incrementShowingFilms = () => ({
  type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
  payload: FilmSettings.SHOWING_BY_BUTTON,
});
