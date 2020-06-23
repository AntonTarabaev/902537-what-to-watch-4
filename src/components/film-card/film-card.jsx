const FilmCard = (props) => {
  const {film, onFilmCardHover, onHeaderClick} = props;
  const {
    title,
    poster,
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmCardHover(film)}>
      <div className="small-movie-card__image">
        <img src={`img/${poster}`}
          alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onHeaderClick}
          className="small-movie-card__link"
          href="movie-page.html">{title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;
