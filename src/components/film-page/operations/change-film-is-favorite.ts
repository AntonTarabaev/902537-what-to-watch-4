import {ServerRoutes} from "@constants/routes";
import {setFilmIsFavorite} from "@components/app/actions/set-film-is-favorite";
import {parseFilm} from "@root/adapters/films";
import {Dispatch} from "redux";
import {DataActions, DataState} from "@components/app/types";
import {AxiosInstance} from "axios";

export const changeFilmIsFavorite = (filmId: string, isFavorite: boolean) => (dispatch: Dispatch<DataActions>, getState: () => DataState, api: AxiosInstance) => {
  const status = isFavorite ? 0 : 1;

  return api.post(`${ServerRoutes.FAVORITE}/${filmId}/${status}`)
    .then((response) => {
      dispatch(setFilmIsFavorite(parseFilm(response.data)));
    }).catch((err) => {
      throw err;
    });
};
