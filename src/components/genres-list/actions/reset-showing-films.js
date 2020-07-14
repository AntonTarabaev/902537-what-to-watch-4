import {FilmSettings} from "@constants/main";
import {GenresListActionTypes} from "@constants/action-types";

export const resetShowingFilms = () => ({
  type: GenresListActionTypes.RESET_SHOWING_FILMS,
  payload: FilmSettings.SHOWING_ON_START_COUNT,
});
