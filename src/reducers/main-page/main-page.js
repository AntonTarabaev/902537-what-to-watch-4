import {FilmSettings, FILTER_ALL_GENRES} from "@constants/main";
import {GenresListActionTypes} from "@components/genres-list/action-types";
import {extend} from "@utils/common";
import {MainPageActionTypes} from "@components/main/action-types";

const initialState = {
  filterGenre: FILTER_ALL_GENRES,
  showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
};

export const mainPage = (state = initialState, action) => {
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
