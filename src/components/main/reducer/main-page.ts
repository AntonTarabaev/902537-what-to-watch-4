import {FILTER_ALL_GENRES} from "@constants/main";
import {GenresListActionTypes, MainPageActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";
import {FilmSettings, MainPageActions, MainPageState} from "@components/main/types";

const initialState: MainPageState = {
  filterGenre: FILTER_ALL_GENRES,
  showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
};

export const mainPage = (state = initialState, action: MainPageActions) => {
  switch (action.type) {
    case GenresListActionTypes.CHANGE_GENRE_FILTER:
      return extend(state, {
        filterGenre: action.payload,
      });

    case GenresListActionTypes.RESET_SHOWING_FILMS:
      return extend(state, {
        showingFilmsCount: action.payload,
      });

    case MainPageActionTypes.INCREMENT_SHOWING_FILMS:
      return extend(state, {
        showingFilmsCount: state.showingFilmsCount + action.payload,
      });

    default:
      return state;
  }
};
