import {AppActionTypes} from "@constants/action-types";
import {DataActions} from "@components/app/types";

export const setComments = (comments = []): DataActions => ({
  type: AppActionTypes.SET_COMMENTS,
  payload: comments,
});
