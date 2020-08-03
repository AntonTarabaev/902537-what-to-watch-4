import {AppActionTypes} from "@constants/action-types";
import {Film} from "@root/types";
import {DataActions} from "../types";

export const setPromo = (promo: Film): DataActions => ({
  type: AppActionTypes.SET_PROMO,
  payload: promo,
});
