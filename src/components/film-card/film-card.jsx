import PreviewPlayer from "@components/preview-player/preview-player";
import withPreview from "@root/hocs/with-preview/with-preview";

const PreviewPlayerWrapped = withPreview(PreviewPlayer);

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
          onFilmCardElementClick(id);
        }}
      >
        {isActive ?
          <PreviewPlayerWrapped
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
            onFilmCardElementClick(id);
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
