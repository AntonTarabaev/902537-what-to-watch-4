import {GenresListActionTypes} from "@constants/action-types";
import {MainPageActions} from "@components/main/types";

export const changeActiveGenre = (genre: string): MainPageActions => ({
  type: GenresListActionTypes.CHANGE_GENRE_FILTER,
  payload: genre,
});
