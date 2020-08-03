import {MainPageActionTypes} from "@constants/action-types";
import {FilmSettings, MainPageActions} from "@components/main/types";

export const incrementShowingFilms = (): MainPageActions => ({
  type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
  payload: FilmSettings.SHOWING_BY_BUTTON,
});
