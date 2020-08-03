import {GenresListActionTypes, MainPageActionTypes} from "@constants/action-types";

export interface MainPageState {
  filterGenre: string;
  showingFilmsCount: number;
}

interface IncrementShowingFilmsAction {
  type: typeof MainPageActionTypes.INCREMENT_SHOWING_FILMS;
  payload: number;
}

interface ChangeActiveGenreAction {
  type: typeof GenresListActionTypes.CHANGE_GENRE_FILTER;
  payload: string;
}

interface ResetShowingFilmsAction {
  type: typeof GenresListActionTypes.RESET_SHOWING_FILMS;
  payload: number;
}

export type MainPageActions = IncrementShowingFilmsAction | ChangeActiveGenreAction | ResetShowingFilmsAction;
