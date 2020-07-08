import {data} from "@root/reducers/data/data";
import {MOCK_FILMS} from "@root/mocks/films";
import {PromoSetting} from "@constants/main";

describe(`Data reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      films: MOCK_FILMS,
      promo: PromoSetting,
    });
  });
});
