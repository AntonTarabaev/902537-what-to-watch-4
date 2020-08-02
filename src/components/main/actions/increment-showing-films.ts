import {FilmSettings} from "@constants/main";
import {MainPageActionTypes} from "@constants/action-types";
import {MainPageActions} from "@components/main/types";

export const incrementShowingFilms = (): MainPageActions => ({
  type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
  payload: FilmSettings.SHOWING_BY_BUTTON,
});
