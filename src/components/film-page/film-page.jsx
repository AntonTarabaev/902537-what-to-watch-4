import FilmDetailsTabs from "@root/components/film-details-tabs/film-details-tabs";
import FilmsList from "@root/components/films-list/films-list";

const FilmPage = (props) => {
  const {film, films, onFilmCardElementClick} = props;
  const {
    title,
    poster,
    releaseYear,
    genre,
  } = film;

  const extraFilms = [];
  for (const currentFilm of films) {
    if (extraFilms.length === 4) {
      break;
    }
    if (currentFilm !== film && currentFilm.genre === film.genre) {
      extraFilms.push(currentFilm);
    }
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${poster}`} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${poster}`} alt={`${title} poster`} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <FilmDetailsTabs film={film}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {extraFilms.length > 0 &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList
              onFilmCardElementClick={onFilmCardElementClick}
              films={extraFilms}
            />
          </section>
        }

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingVotes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    preview: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired).isRequired,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingVotes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    preview: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
};

export default FilmPage;