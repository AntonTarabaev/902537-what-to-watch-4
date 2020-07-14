import {AppActionTypes} from "@constants/action-types";

export const changeActiveFilmId = (targetFilmId) => ({
  type: AppActionTypes.CHANGE_ACTIVE_FILM_ID,
  payload: targetFilmId,
});
