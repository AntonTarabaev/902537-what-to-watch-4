import PreviewPlayer from "@components/preview-player/preview-player";

const FilmCard = (props) => {
  const {
    film,
    onFilmCardMouseEnter,
    onFilmCardMouseLeave,
    onFilmCardElementClick,
    isActive,
  } = props;

  const {
    id,
    title,
    poster,
    preview,
  } = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onFilmCardMouseEnter(id)}
      onMouseLeave={onFilmCardMouseLeave}
    >
      <div
        className="small-movie-card__image"
        onClick={() => {
          onFilmCardElementClick(film);
        }}
      >
        {isActive ?
          <PreviewPlayer
            src={preview}
            poster={`img/${poster}`}
          /> :
          <img
            src={`img/${poster}`}
            alt={title}
            width="280"
            height="175"
          />
        }
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onFilmCardElementClick(film);
          }}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;
