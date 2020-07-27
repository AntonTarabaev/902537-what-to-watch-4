import {ServerRoutes} from "@constants/routes";
import {setFavorite} from "@components/my-list/actions/set-favorite";
import {parseFilms} from "@root/adapters/films";

export const loadFavorite = () => (dispatch, getState, api) => {
  return api.get(ServerRoutes.FAVORITE)
    .then((response) => {
      dispatch(setFavorite(parseFilms(response.data)));
    });
};
