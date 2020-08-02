import {mainPage} from "@components/main/reducer/main-page";
import {FilmSettings, FILTER_ALL_GENRES} from "@constants/main";
import {GenresListActionTypes} from "@constants/action-types";
import {MainPageActionTypes} from "@constants/action-types";
import {incrementShowingFilms} from "@components/main/actions/increment-showing-films";
import {changeActiveGenre} from "@components/genres-list/actions/change-active-genre";
import {resetShowingFilms} from "@components/genres-list/actions/reset-showing-films";

describe(`MainPage reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(mainPage(void 0, {
      type: null,
      payload: null,
    })).toEqual({
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
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: GenresListActionTypes.RESET_SHOWING_FILMS,
      payload: 5,
    })).toEqual({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: 5,
    });

    expect(mainPage({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: GenresListActionTypes.RESET_SHOWING_FILMS,
      payload: 15,
    })).toEqual({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: 15,
    });
  });

  it(`Reducer should increment films count by a given value`, () => {
    expect(mainPage({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT,
    }, {
      type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
      payload: FilmSettings.SHOWING_BY_BUTTON,
    })).toEqual({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: FilmSettings.SHOWING_ON_START_COUNT + FilmSettings.SHOWING_BY_BUTTON,
    });

    expect(mainPage({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: 10,
    }, {
      type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
      payload: 5,
    })).toEqual({
      filterGenre: FILTER_ALL_GENRES,
      showingFilmsCount: 15,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for increment showing films returns correct action`, () => {
    expect(incrementShowingFilms()).toEqual({
      type: MainPageActionTypes.INCREMENT_SHOWING_FILMS,
      payload: FilmSettings.SHOWING_BY_BUTTON,
    });
  });

  it(`Action creator for reset showing films returns correct action`, () => {
    expect(resetShowingFilms()).toEqual({
      type: GenresListActionTypes.RESET_SHOWING_FILMS,
      payload: FilmSettings.SHOWING_ON_START_COUNT,
    });
  });

  it(`Action creator for change filterGenre returns correct action`, () => {
    expect(changeActiveGenre(`genre`)).toEqual({
      type: GenresListActionTypes.CHANGE_GENRE_FILTER,
      payload: `genre`,
    });
  });
});
