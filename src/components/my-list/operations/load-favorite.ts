import {ServerRoutes} from "@constants/routes";
import {setFavorite} from "@components/my-list/actions/set-favorite";
import {parseFilms} from "@root/adapters/films";
import {Dispatch} from "redux";
import {UserActions, UserState} from "@components/sign-in/types";
import {AxiosStatic} from "axios";

export const loadFavorite = () => (dispatch: Dispatch<UserActions>, getState: () => UserState, api: AxiosStatic) => {
  return api.get(ServerRoutes.FAVORITE)
    .then((response) => {
      dispatch(setFavorite(parseFilms(response.data)));
    });
};
