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
