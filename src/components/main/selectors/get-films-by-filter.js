import {FILTER_ALL_GENRES} from "@constants/main";
import {createSelector} from "reselect";
import {getActiveGenre} from "@components/genres-list/selectors/get-active-genre";
import {getFilms} from "@components/app/selectors/get-films";

export const getFilmsByFilter = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      return genre === FILTER_ALL_GENRES ?
        films :
        films.filter((film) => film.genre === genre);
    }
);
