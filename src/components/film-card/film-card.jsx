import PreviewPlayer from "@components/preview-player/preview-player";
import withPreview from "@root/hocs/with-preview/with-preview";
import {Film} from "@root/types";
import {Link} from "react-router-dom";
import {AppRoutes} from "@constants/routes";

const PreviewPlayerWrapped = withPreview(PreviewPlayer);

const FilmCard = (props) => {
  const {
    film,
    onFilmCardMouseEnter,
    onFilmCardMouseLeave,
    isActive,
  } = props;

  const {
    id,
    title,
    poster,
    preview,
  } = film;

  const filmCardMouseEnterHandler = () => {
    onFilmCardMouseEnter(id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={filmCardMouseEnterHandler}
      onMouseLeave={onFilmCardMouseLeave}
    >
      <Link to={`${AppRoutes.FILMS}/${id}`}>
        <div
          className="small-movie-card__image"
        >
          {isActive ?
            <PreviewPlayerWrapped
              src={preview}
              poster={`${poster}`}
            /> :
            <img
              src={`${poster}`}
              alt={title}
              width="280"
              height="175"
            />
          }
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoutes.FILMS}/${id}`}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  film: Film,
};

export default React.memo(FilmCard);
