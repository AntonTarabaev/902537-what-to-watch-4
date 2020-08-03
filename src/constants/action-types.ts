import {inferLiteralFromString} from "@utils/common";

export const MainPageActionTypes = {
  INCREMENT_SHOWING_FILMS: inferLiteralFromString(`INCREMENT_SHOWING_FILMS`),
};

export const GenresListActionTypes = {
  CHANGE_GENRE_FILTER: inferLiteralFromString(`CHANGE_GENRE_FILTER`),
  RESET_SHOWING_FILMS: inferLiteralFromString(`RESET_SHOWING_FILMS`),
};

export const AppActionTypes = {
  SET_FILMS: inferLiteralFromString(`LOAD_FILMS`),
  SET_PROMO: inferLiteralFromString(`LOAD_PROMO`),
  SET_COMMENTS: inferLiteralFromString(`SET_COMMENTS`),
  SET_LOADED_STATUS: inferLiteralFromString(`SET_LOADED_STATUS`),
  SET_FILM_IS_FAVORITE: inferLiteralFromString(`CHANGE_FILM_IS_FAVORITE`),
};

export const UserActionTypes = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
  SET_FAVORITE: `SET_FAVORITE`,
};
