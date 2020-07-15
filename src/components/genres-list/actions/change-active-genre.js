import {GenresListActionTypes} from "@constants/action-types";

export const changeActiveGenre = (genre) => ({
  type: GenresListActionTypes.CHANGE_GENRE_FILTER,
  payload: genre,
});
