import {RootState} from "@root/types";

export const getFilmById = (state: RootState, filmId: string) => {
  return state.data.films.find((it) => it.id === filmId);
};
