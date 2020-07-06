import FilmsList from "@components/films-list/films-list";
import GenresList from "@components/genres-list/genres-list";

const Main = (props) => {
  const {promo, films, uniqueGenres, activeFilter, onFilmCardElementClick, onFilterClick} = props;
  const {
    TITLE: promoTitle,
    GENRE: promoGenre,
    RELEASE_DATE: promoReleaseDate,
    BG: promoBG,
    POSTER: promoPoster,
  } = promo;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`img/${promoBG}`} alt={promoTitle}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
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
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={`img/${promoPoster}`} alt={`${promoTitle} poster`} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoGenre}</span>
                <span className="movie-card__year">{promoReleaseDate}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={uniqueGenres}
            activeFilter={activeFilter}
            onFilterClick={onFilterClick}
          />

          <FilmsList
            onFilmCardElementClick={onFilmCardElementClick}
            films={films}
          />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

Main.propTypes = {
  promo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.number.isRequired,
    BG: PropTypes.string.isRequired,
    POSTER: PropTypes.string.isRequired,
  }).isRequired,
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
  uniqueGenres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
};

export default Main;

