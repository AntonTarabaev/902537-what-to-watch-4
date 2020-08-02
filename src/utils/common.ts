import {MINUTES_IN_HOUR, MONTHS} from "@constants/main";
import {Film} from "@root/types";

export const formatTime = (durationInMinutes: number) => {
  return (
    durationInMinutes > MINUTES_IN_HOUR ?
      `${(durationInMinutes - durationInMinutes % MINUTES_IN_HOUR) / MINUTES_IN_HOUR}h ${durationInMinutes % MINUTES_IN_HOUR}m` :
      `${durationInMinutes}m`
  );
};

export const formatDate = (date: Date) => {
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const extend = (a: object, b: object) => {
  return Object.assign({}, a, b);
};

export const getUniqueGenres = (films: Film[], maxGenresCount: number) => {
  return [...new Set(films.map((it) => it.genre))].slice(0, maxGenresCount);
};

export const changeFormElementsDisabledProperty = (form: HTMLFormElement, disabled: boolean) => {
  Array.from(form.elements).map((formElement: HTMLInputElement) => {
    formElement.disabled = disabled;
  });
};

export const noop = () => {
  // do nothing
};
