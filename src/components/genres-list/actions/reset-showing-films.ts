import {GenresListActionTypes} from "@constants/action-types";
import {FilmSettings, MainPageActions} from "@components/main/types";

export const resetShowingFilms = (): MainPageActions => ({
  type: GenresListActionTypes.RESET_SHOWING_FILMS,
  payload: FilmSettings.SHOWING_ON_START_COUNT,
});
