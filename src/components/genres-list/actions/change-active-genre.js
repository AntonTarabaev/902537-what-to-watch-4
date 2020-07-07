import {GenresListActionTypes} from "@components/genres-list/action-types";


export const changeActiveGenre = (genre) => ({
  type: GenresListActionTypes.CHANGE_GENRE_FILTER,
  payload: genre,
});
