import {ServerRoutes} from "@constants/routes";
import {Dispatch} from "redux";
import {DataActions, DataState} from "@components/app/types";
import {AxiosInstance} from "axios";

export const sendReview = (
    commentData: {comment: string; rating: number},
    filmId: string, onSuccess: () => void,
    onError: () => void
) => (dispatch: Dispatch<DataActions>, getState: () => DataState, api: AxiosInstance) => {
  return api.post(`${ServerRoutes.COMMENTS}/${filmId}`, {
    comment: commentData.comment,
    rating: commentData.rating,
  }).then(() => {
    onSuccess();
  }).catch((err) => {
    onError();

    throw err;
  });
};
