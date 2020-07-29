import {ServerRoutes} from "@constants/routes";
import {setFilmIsFavorite} from "@components/app/actions/set-film-is-favorite";
import {parseFilm} from "@root/adapters/films";

export const changeFilmIsFavorite = (filmId, isFavorite) => (dispatch, getState, api) => {
  const status = isFavorite ? 0 : 1;

  return api.post(`${ServerRoutes.FAVORITE}/${filmId}/${status}`)
    .then((response) => {
      dispatch(setFilmIsFavorite(parseFilm(response.data)));
    }).catch((err) => {
      throw err;
    });
};
