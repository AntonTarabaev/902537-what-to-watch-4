import {SIMILAR_FILMS_COUNT} from "@constants/main";

export const getSimilarFilms = (state, film) => {
  const similarFilms = [];

  for (const currentFilm of state.data.films) {
    if (similarFilms.length === SIMILAR_FILMS_COUNT) {
      break;
    }
    if (currentFilm.id !== film.id && currentFilm.genre === film.genre) {
      similarFilms.push(currentFilm);
    }
  }

  return similarFilms;
};
