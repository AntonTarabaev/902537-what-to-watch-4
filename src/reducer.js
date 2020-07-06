import {FILTER_ALL_GENRES, GENRES_MAX_COUNT, MOCK_FILMS_COUNT} from "@constants/main";
import {generateFilms} from "@root/mocks/films";
import {extend, getFilteredByGenreFilms, getUniqueGenres} from "@utils/common";

export const mockFilms = generateFilms(MOCK_FILMS_COUNT);

const uniqueGenres = [FILTER_ALL_GENRES, ...getUniqueGenres(mockFilms, GENRES_MAX_COUNT)];

const initialState = {
  filterGenre: FILTER_ALL_GENRES,
  filterGenres: uniqueGenres,
  films: mockFilms,
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};

const ActionCreator = {
  changeGenreFilter: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre,
  }),

  getFilteredFilms: (genre) => ({
    type: ActionType.GET_FILTERED_FILMS,
    payload: getFilteredByGenreFilms(mockFilms, genre),
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        filterGenre: action.payload,
      });

    case ActionType.GET_FILTERED_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
