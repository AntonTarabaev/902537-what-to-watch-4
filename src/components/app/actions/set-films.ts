import {AppActionTypes} from "@constants/action-types";
import {Film} from "@root/types";
import {DataActions} from "../types";

export const setFilms = (films: Film[]): DataActions => ({
  type: AppActionTypes.SET_FILMS,
  payload: films,
});
