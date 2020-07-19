import {ServerRoutes} from "@constants/routes";
import {setPromo} from "@components/app/actions/set-promo";
import {setLoadedStatus} from "@components/app/actions/set-loaded-status";
import {setFilms} from "@components/app/actions/set-films";
import {parseFilm, parseFilms} from "@root/adapters/films";

export const loadData = () => (dispatch, getState, api) => {
  const promo = () => api.get(ServerRoutes.PROMO);
  const films = () => api.get(ServerRoutes.FILMS);

  return Promise.all([promo(), films()])
    .then((results) => {
      dispatch(setPromo(parseFilm(results[0].data)));
      dispatch(setFilms(parseFilms(results[1].data)));
      dispatch(setLoadedStatus());
    });
};
