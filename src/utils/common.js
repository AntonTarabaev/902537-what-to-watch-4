import {MINUTES_IN_HOUR, MONTHS} from "@constants/main";

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

export const getUniqueGenres = (films, maxGenresCount) => {
  return [...new Set(films.map((it) => it.genre))].slice(0, maxGenresCount);
};

export const changeFormElementsDisabledProperty = (form, disabled) => {
  Array.from(form.elements).map((formElement) => {
    formElement.disabled = disabled;
  });
};
