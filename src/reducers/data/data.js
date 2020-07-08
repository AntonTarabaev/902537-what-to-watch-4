import {PromoSetting} from "@constants/main";
import {MOCK_FILMS} from "@root/mocks/films";

const initialState = {
  films: MOCK_FILMS,
  promo: PromoSetting,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
