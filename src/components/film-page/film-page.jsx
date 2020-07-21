import Tabs from "@components/tabs/tabs";
import FilmsList from "@components/films-list/films-list";
import FilmPageTabOverview from "@components/film-page/film-page-tab-overview/film-page-tab-overview";
import FilmPageTabDetails from "@components/film-page/film-page-tab-details/film-page-tab-details";
import FilmPageTabReviews from "@components/film-page/film-page-tab-reviews/film-page-tab-reviews";
import withActiveTab from "@root/hocs/with-active-tab/with-active-tab";
import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import Footer from "@components/footer/footer";
import withReviews from "@root/hocs/with-reviews/with-reviews";
import Header from "@components/header/header.connect";

const TabsWrapped = withActiveTab(Tabs);
const FilmsListWrapped = withActiveFilmCard(FilmsList);
const FilmPageTabReviewsWrapped = withReviews(FilmPageTabReviews);

const FilmPage = (props) => {
  const {
    film,
    similarFilms,
    isPlayerActive,
    renderPlayer,
    comments,
    loadFilmComments,
    setFilmComments,
    onPlayButtonClick,
    onFilmCardElementClick,
  } = props;

  const {
    id,
    title,
    poster,
    bgImage,
    releaseYear,
    genre,
    duration,
    preview,
  } = film;

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
      component:
        <FilmPageTabReviewsWrapped
          filmId={id}
          comments={comments}
          loadFilmComments={loadFilmComments}
          setFilmComments={setFilmComments}
        />,
    },
  ];

  if (isPlayerActive) {
    return renderPlayer(title, preview, duration);
  }

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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
              onFilmCardElementClick={onFilmCardElementClick}
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
  similarFilms: PropTypes.arrayOf(PropTypes.shape({
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
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingVotes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    preview: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  isPlayerActive: PropTypes.bool.isRequired,
  loadFilmComments: PropTypes.func.isRequired,
  setFilmComments: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
};

export default FilmPage;
