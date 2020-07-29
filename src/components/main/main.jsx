import FilmsList from "@components/films-list/films-list";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMoreButton from "@components/show-more-button/show-more-button";
import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import Footer from "@components/footer/footer";
import Header from "@components/header/header.connect";
import {Film} from "@root/types";
import {Link} from "react-router-dom";
import {AppRoutes} from "@constants/routes";

const FilmsListWrapped = withActiveFilmCard(FilmsList);

const Main = (props) => {
  const {
    promo,
    films,
    showingFilmsCount,
    onShowMoreButtonClick,
    onFavoriteChange,
  } = props;

  const {
    id: promoId,
    title: promoTitle,
    poster: promoPoster,
    bgImage: promoBG,
    genre: promoGenre,
    releaseYear: promoReleaseDate,
    isFavorite: promoIsFavorite,
  } = promo;

  const onFavoriteButtonClick = () => {
    onFavoriteChange(promoId, promoIsFavorite);
  };

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
                <Link className="btn btn--play movie-card__button" to={`${AppRoutes.FILMS}/${promoId}/player`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button"
                  onClick={onFavoriteButtonClick}
                >
                  {promoIsFavorite
                    ? <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"/>
                    </svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                  }
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
            films={films.slice(0, showingFilmsCount)}
          />

          {showingFilmsCount < films.length && <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>}
        </section>

        <Footer/>
      </div>
    </>
  );
};

Main.propTypes = {
  promo: Film,
  films: PropTypes.arrayOf(Film).isRequired,
  showingFilmsCount: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default Main;
