import {FILTER_ALL_GENRES, MINUTES_IN_HOUR, MONTHS} from "@constants/main";

export const formatTime = (durationInMinutes) => {
  return (
    durationInMinutes > MINUTES_IN_HOUR ?
      `${(durationInMinutes - durationInMinutes % MINUTES_IN_HOUR) / MINUTES_IN_HOUR}h ${durationInMinutes % MINUTES_IN_HOUR}m` :
      `${durationInMinutes}m`
  );
};

export const formatDate = (date) => {
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilteredByGenreFilms = (films, genre) => {
  return genre === FILTER_ALL_GENRES ? films : films.filter((film) => film.genre === genre);
};

export const getUniqueGenres = (films, maxGenresCount) => {
  return [...new Set(films.map((it) => it.genre))].slice(0, maxGenresCount);
};
