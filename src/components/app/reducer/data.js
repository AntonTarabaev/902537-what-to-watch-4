import {PromoSetting} from "@constants/main";
import {MOCK_FILMS} from "@root/mocks/films";
import {AppActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";

const initialState = {
  films: MOCK_FILMS,
  promo: PromoSetting,
  activeFilmId: `-1`,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.CHANGE_ACTIVE_FILM_ID:
      return extend(state, {
        activeFilmId: action.payload,
      });

    default:
      return state;
  }
};
