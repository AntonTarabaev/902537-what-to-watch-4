import Tabs from "@components/tabs/tabs";
import FilmsList from "@components/films-list/films-list";
import FilmPageTabOverview from "@components/film-page/film-page-tab-overview/film-page-tab-overview";
import FilmPageTabDetails from "@components/film-page/film-page-tab-details/film-page-tab-details";
import FilmPageTabReviews from "@components/film-page/film-page-tab-reviews/film-page-tab-reviews.connect";
import withActiveTab from "@root/hocs/with-active-tab/with-active-tab";
import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import Footer from "@components/footer/footer";
import Header from "@components/header/header.connect";
import {Film} from "@root/types";
import {AuthorizationStatus} from "@root/types";
import {AppRoutes} from "@constants/routes";
import {Link} from "react-router-dom";

const TabsWrapped = withActiveTab(Tabs);
const FilmsListWrapped = withActiveFilmCard(FilmsList);

const FilmPage = (props) => {
  const {
    authorizationStatus,
    film,
    similarFilms,
    onFavoriteChange,
  } = props;

  const {
    id,
    title,
    poster,
    bgImage,
    releaseYear,
    genre,
    isFavorite,
  } = film;

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const PageTabs = [
    {
      id: `Overview`,
      component: <FilmPageTabOverview film={film}/>,
    },
    {
      id: `Details`,
      component: <FilmPageTabDetails film={film}/>,
    },
    {
      id: `Reviews`,
      component: <FilmPageTabReviews filmId={id}/>,
    },
  ];

  const onFavoriteButtonClick = () => {
    onFavoriteChange(id, isFavorite);
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bgImage} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Header/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`${AppRoutes.PLAYER}/${id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button"
                  onClick={onFavoriteButtonClick}
                >
                  {isFavorite
                    ? <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"/>
                    </svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                  }
                  <span>My list</span>
                </button>
                {isAuthorized && <Link to={`${AppRoutes.FILMS}/${id}/review`} className="btn movie-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <TabsWrapped tabs={PageTabs} tabsId={id}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarFilms.length > 0 &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsListWrapped
              films={similarFilms}
            />
          </section>
        }

        <Footer/>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
  similarFilms: PropTypes.arrayOf(Film).isRequired,
  film: Film,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default FilmPage;
