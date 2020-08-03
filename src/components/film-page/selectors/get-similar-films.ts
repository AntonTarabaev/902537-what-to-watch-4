import {SIMILAR_FILMS_COUNT} from "@constants/main";
import {Film, RootState} from "@root/types";

export const getSimilarFilms = (state: RootState, film: Film) => {
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
