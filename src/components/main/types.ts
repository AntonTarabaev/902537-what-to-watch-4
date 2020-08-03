import {GenresListActionTypes, MainPageActionTypes} from "@constants/action-types";

export interface MainPageState {
  filterGenre: string;
  showingFilmsCount: number;
}

export enum FilmSettings {
  SHOWING_ON_START_COUNT = 8,
  SHOWING_BY_BUTTON = 8,
  EXTRA_COUNT = 4,
}

interface IncrementShowingFilmsAction {
  type: typeof MainPageActionTypes.INCREMENT_SHOWING_FILMS;
  payload: FilmSettings;
}

interface ChangeActiveGenreAction {
  type: typeof GenresListActionTypes.CHANGE_GENRE_FILTER;
  payload: string;
}

interface ResetShowingFilmsAction {
  type: typeof GenresListActionTypes.RESET_SHOWING_FILMS;
  payload: FilmSettings;
}

export type MainPageActions = IncrementShowingFilmsAction | ChangeActiveGenreAction | ResetShowingFilmsAction;
