import {AppActionTypes} from "@constants/action-types";
import {DataActions} from "@components/app/types";
import {Comment} from "@root/types";

export const setComments = (comments: Comment[] = []): DataActions => ({
  type: AppActionTypes.SET_COMMENTS,
  payload: comments,
});
