import FilmsList from "@components/films-list/films-list";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMoreButton from "@components/show-more-button/show-more-button";
import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import Footer from "@components/footer/footer";

const FilmsListWrapped = withActiveFilmCard(FilmsList);

const Main = (props) => {
  const {
    promo,
    films,
    showingFilmsCount,
    isPlayerActive,
    renderPlayer,
    onPlayButtonClick,
    onFilmCardElementClick,
    onShowMoreButtonClick,
  } = props;

  const {
    title: promoTitle,
    previewImage: promoPoster,
    bgImage: promoBG,
    genre: promoGenre,
    releaseYear: promoReleaseDate,
    duration: promoDuration,
    video: promoSrc,
  } = promo;

  if (isPlayerActive) {
    return renderPlayer(promoTitle, promoSrc, promoDuration);
  }

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`${promoBG}`} alt={promoTitle}/>
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
              <img src={`${promoPoster}`} alt={`${promoTitle} poster`} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoGenre}</span>
                <span className="movie-card__year">{promoReleaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onPlayButtonClick}>
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

          <GenresList/>

          <FilmsListWrapped
            onFilmCardElementClick={onFilmCardElementClick}
            films={films.slice(0, showingFilmsCount)}
          />

          {showingFilmsCount < films.length && <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>}
        </section>

        <Footer
          isMainPage={true}
        />
      </div>
    </>
  );
};

Main.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    bgImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired,
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
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    preview: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  showingFilmsCount: PropTypes.number.isRequired,
  isPlayerActive: PropTypes.bool.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default Main;
