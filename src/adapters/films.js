export const parseFilm = (film) => {
  return {
    id: String(film[`id`]),
    title: film[`name`],
    poster: film[`poster_image`],
    previewImage: film[`preview_image`],
    bgImage: film[`background_image`],
    bgColor: film[`background_color`],
    video: film[`video_link`],
    preview: film[`preview_video_link`],
    description: film[`description`],
    rating: film[`rating`],
    ratingVotes: film[`scores_count`],
    director: film[`director`],
    actors: film[`starring`],
    duration: film[`run_time`],
    genre: film[`genre`],
    releaseYear: film[`released`],
    isFavorite: film[`is_favorite`],
  };
};

export const parseFilms = (films) => {
  return films.map(parseFilm);
};
