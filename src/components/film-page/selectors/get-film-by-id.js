export const getFilmById = (state, filmId) => {
  return state.data.films.find((it) => it.id === filmId);
};
