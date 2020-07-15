import {FILTER_ALL_GENRES} from "@constants/main";

export const getFilmsByFilter = (state) => {
  return state.mainPage.filterGenre === FILTER_ALL_GENRES ?
    state.data.films :
    state.data.films.filter((film) => film.genre === state.mainPage.filterGenre);
};
