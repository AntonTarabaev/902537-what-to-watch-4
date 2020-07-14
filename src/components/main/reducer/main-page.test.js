import {mainPage} from "@components/main/reducer/main-page";
import {FilmSettings, FILTER_ALL_GENRES} from "@constants/main";
import {GenresListActionTypes} from "@constants/action-types";
import {MainPageActionTypes} from "@constants/action-types";

describe(`MainPage reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(mainPage(void 0, {})).toEqual({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    });
  });

  it(`Reducer should change filterGenre by a given value`, () => {
    expect(mainPage({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: GenresListActionTypes.CHANGE_GENRE_FILTER,
      payload: `Thriller`,
    })).toEqual({
      filterGenre: `Thriller`,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    });

    expect(mainPage({
      filterGenre: `Comedy`,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT * 2,
    }, {
      type: GenresListActionTypes.CHANGE_GENRE_FILTER,
      payload: `Drama`,
    })).toEqual({
      filterGenre: `Drama`,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT * 2,
    });
  });

  it(`Reducer should reset films count to a given value`, () => {
    expect(mainPage({
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: GenresListActionTypes.RESET_SHOWING_FILMS,
      payload: 5,
    })).toEqual({
      showingFilmsCount: 5,
    });

    expect(mainPage({
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: GenresListActionTypes.RESET_SHOWING_FILMS,
      payload: 15,
    })).toEqual({
      showingFilmsCount: 15,
    });
  });

  it(`Reducer should increment films count by a given value`, () => {
    expect(mainPage({
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
      payload: FilmSettings.SHOWING_BY_BUTTON,
    })).toEqual({
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT + FilmSettings.SHOWING_BY_BUTTON,
    });

    expect(mainPage({
      showingFilmsCount: 10,
    }, {
      type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
      payload: 5,
    })).toEqual({
      showingFilmsCount: 15,
    });
  });
});
