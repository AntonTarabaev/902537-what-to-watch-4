import {formatTime} from "@utils/common";
import {Film} from "@root/types";

const FilmPageTabDetails = (props) => {
  const {film} = props;
  const {
    actors,
    director,
    genre,
    duration,
    releaseYear,
  } = film;

  const formattedDuration = formatTime(duration);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actors.map((it, i) => {
              return (
                <React.Fragment key={it + i}>
                  {it}
                  {i < actors.length - 1 && `,`}
                  {i < actors.length - 1 && <br/>}
                </React.Fragment>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formattedDuration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );
};

FilmPageTabDetails.propTypes = {
  film: Film,
};

export default FilmPageTabDetails;
