import {setComments} from "@components/film-page/actions/set-comments";
import {ServerRoutes} from "@constants/routes";
import {parseComments} from "@root/adapters/comments";
import {Dispatch} from "redux";
import {DataActions, DataState} from "@components/app/types";
import {AxiosInstance} from "axios";

export const loadComments = (filmId: string) => (dispatch: Dispatch<DataActions>, getState: () => DataState, api: AxiosInstance) => {
  return api.get(`${ServerRoutes.COMMENTS}/${filmId}`)
    .then((response) => {
      dispatch(setComments(parseComments(response.data)));
    });
};
