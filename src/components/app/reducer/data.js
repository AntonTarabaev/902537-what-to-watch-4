import {AppActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";

const initialState = {
  films: [],
  promo: {},
  comments: [],
  isLoaded: false,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.SET_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case AppActionTypes.SET_PROMO:
      return extend(state, {
        promo: action.payload,
      });

    case AppActionTypes.SET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

    case AppActionTypes.SET_LOADED_STATUS:
      return extend(state, {
        isLoaded: action.payload,
      });

    default:
      return state;
  }
};
