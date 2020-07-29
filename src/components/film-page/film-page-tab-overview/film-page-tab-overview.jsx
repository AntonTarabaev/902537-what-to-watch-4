import {Film} from "@root/types";

const MAX_ACTORS_COUNT = 4;

const FilmRatings = {
  BAD: {
    RATING: 3,
    RATING_TEXT: `Bad`,
  },
  NORMAL: {
    RATING: 5,
    RATING_TEXT: `Normal`,
  },
  GOOD: {
    RATING: 8,
    RATING_TEXT: `Good`,
  },
  VERY_GOOD: {
    RATING: 10,
    RATING_TEXT: `Very good`,
  },
  AWESOME: {
    RATING_TEXT: `Awesome`,
  }
};

const getFilmRankText = (filmRating) => {
  if (filmRating < FilmRatings.BAD.RATING) {
    return FilmRatings.BAD.RATING_TEXT;
  }
  if (filmRating < FilmRatings.NORMAL.RATING) {
    return FilmRatings.NORMAL.RATING_TEXT;
  }
  if (filmRating < FilmRatings.GOOD.RATING) {
    return FilmRatings.GOOD.RATING_TEXT;
  }
  if (filmRating < FilmRatings.VERY_GOOD.RATING) {
    return FilmRatings.VERY_GOOD.RATING_TEXT;
  }
  return FilmRatings.AWESOME.RATING_TEXT;
};

const FilmPageTabOverview = (props) => {
  const {film} = props;
  const {
    rating,
    ratingVotes,
    description,
    director,
    actors,
  } = film;

  const ratingText = getFilmRankText(rating);
  const overviewStarring = actors.length > MAX_ACTORS_COUNT ? `${actors.slice(0, MAX_ACTORS_COUNT).join(`, `)} and others` : actors.join(`, `);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingText}</span>
          <span className="movie-rating__count">{ratingVotes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {overviewStarring}</strong></p>
      </div>
    </>
  );
};

FilmPageTabOverview.propTypes = {
  film: Film,
};

export default React.memo(FilmPageTabOverview);
