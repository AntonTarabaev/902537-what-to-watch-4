import {AppActionTypes} from "@constants/action-types";

export const setPromo = (promo) => ({
  type: AppActionTypes.SET_PROMO,
  payload: promo,
});
