import {AppActionTypes} from "@constants/action-types";

export const setComments = (comments) => ({
  type: AppActionTypes.SET_COMMENTS,
  payload: comments,
});
