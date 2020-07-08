import {FILTER_ALL_GENRES, GENRES_MAX_COUNT} from "@constants/main";
import {getUniqueGenres} from "@utils/common";

export const getGenres = (state) => {
  return [FILTER_ALL_GENRES, ...getUniqueGenres(state.films, GENRES_MAX_COUNT)];
};
