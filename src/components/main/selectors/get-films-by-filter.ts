import {FILTER_ALL_GENRES} from "@constants/main";
import {createSelector} from "reselect";
import {RootState} from "@root/types";

const getFilms = (state: RootState) => {
  return state.data.films;
};

const getActiveGenre = (state: RootState) => {
  return state.mainPage.filterGenre;
};

export const getFilmsByFilter = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      return genre === FILTER_ALL_GENRES ?
        films :
        films.filter((film) => film.genre === genre);
    }
);
