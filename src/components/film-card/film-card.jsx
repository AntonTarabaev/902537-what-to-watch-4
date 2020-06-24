const FilmCard = (props) => {
  const {film, onFilmCardHover, onFilmCardElementClick} = props;
  const {
    title,
    poster,
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmCardHover(film)}>
      <div
        className="small-movie-card__image"
        onClick={() => {
          onFilmCardElementClick(film);
        }}>
        <img
          src={`img/${poster}`}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onFilmCardElementClick(film);
          }}
          className="small-movie-card__link"
          href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmCardHover: PropTypes.func.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;
