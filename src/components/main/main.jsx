import FilmsList from "@components/films-list/films-list";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMoreButton from "@components/show-more-button/show-more-button";
import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import Footer from "@components/footer/footer";
import Header from "@components/header/header.connect";
import {Film} from "@root/types";

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
          <Header/>
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
  promo: Film,
  films: PropTypes.arrayOf(Film).isRequired,
  showingFilmsCount: PropTypes.number.isRequired,
  isPlayerActive: PropTypes.bool.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default Main;
