import {setComments} from "@components/film-page/actions/set-comments";
import {ServerRoutes} from "@constants/routes";
import {parseComments} from "@root/adapters/comments";

export const loadComments = (filmId) => (dispatch, getState, api) => {
  return api.get(`${ServerRoutes.COMMENTS}/${filmId}`)
    .then((response) => {
      dispatch(setComments(parseComments(response.data)));
    });
};
