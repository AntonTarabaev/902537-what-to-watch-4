import {data} from "@components/app/reducer/data";
import {MOCK_FILMS} from "@root/mocks/films";
import {PromoSetting} from "@constants/main";
import {AppActionTypes} from "@constants/action-types";

describe(`Data reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      films: MOCK_FILMS,
      promo: PromoSetting,
      activeFilmId: -1,
    });
  });

  it(`Reducer should change activeFilmId by a given value`, () => {
    expect(data({
      films: MOCK_FILMS,
      promo: PromoSetting,
      activeFilmId: -1,
    }, {
      type: AppActionTypes.CHANGE_ACTIVE_FILM_ID,
      payload: `47328947`,
    })).toEqual({
      films: MOCK_FILMS,
      promo: PromoSetting,
      activeFilmId: `47328947`,
    });

    expect(data({
      films: MOCK_FILMS,
      promo: PromoSetting,
      activeFilmId: `47328947`,
    }, {
      type: AppActionTypes.CHANGE_ACTIVE_FILM_ID,
      payload: `1111`,
    })).toEqual({
      films: MOCK_FILMS,
      promo: PromoSetting,
      activeFilmId: `1111`,
    });
  });
});
