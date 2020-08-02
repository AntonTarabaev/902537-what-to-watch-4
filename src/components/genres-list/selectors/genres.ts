import {FILTER_ALL_GENRES, GENRES_MAX_COUNT} from "@constants/main";
import {getUniqueGenres} from "@utils/common";
import {createSelector} from "reselect";
import {RootState} from "@root/types";

const getFilms = (state: RootState) => {
  return state.data.films;
};

export const getGenres = createSelector(
    getFilms,
    (films) => [FILTER_ALL_GENRES, ...getUniqueGenres(films, GENRES_MAX_COUNT)]
);
