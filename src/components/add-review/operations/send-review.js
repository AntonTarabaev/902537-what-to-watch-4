import {ServerRoutes} from "@constants/routes";

export const sendReview = (commentData, filmId, onSuccess, onError) => (dispatch, getState, api) => {
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
