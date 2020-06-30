import {formatTime} from "@root/utils/common";
import ReviewsList from "@root/components/reviews-list/reviews-list";

const DetailsTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const FilmRatings = {
  BAD: {
    RATING: 3,
    RATING_TEXT: `Bad`,
  },
  NORMAL: {
    RATING: 5,
    RATING_TEXT: `Normal`,
  },
  GOOD: {
    RATING: 8,
    RATING_TEXT: `Good`,
  },
  VERY_GOOD: {
    RATING: 10,
    RATING_TEXT: `Very good`,
  },
  AWESOME: {
    RATING_TEXT: `Awesome`,
  }
};

const getFilmRankText = (filmRating) => {
  if (filmRating < FilmRatings.BAD.RATING) {
    return FilmRatings.BAD.RATING_TEXT;
  }
  if (filmRating < FilmRatings.NORMAL.RATING) {
    return FilmRatings.NORMAL.RATING_TEXT;
  }
  if (filmRating < FilmRatings.GOOD.RATING) {
    return FilmRatings.GOOD.RATING_TEXT;
  }
  if (filmRating < FilmRatings.VERY_GOOD.RATING) {
    return FilmRatings.VERY_GOOD.RATING_TEXT;
  }
  return FilmRatings.AWESOME.RATING_TEXT;
};

const Tab = (props) => {
  const {children, isActive} = props;

  return (
    <>
      {isActive ? children : null}
    </>
  );
};

class FilmPageTabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: DetailsTabs.OVERVIEW,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.film.id !== this.props.film.id) {
      this.setState({
        activeTab: DetailsTabs.OVERVIEW,
      });
    }
  }

  render() {
    const {activeTab} = this.state;
    const {film} = this.props;
    const {
      rating,
      ratingVotes,
      director,
      description,
      actors,
      genre,
      releaseYear,
      duration,
      comments,
    } = film;

    const ratingText = getFilmRankText(rating);
    const overviewStarring = actors.length > 4 ? `${actors.slice(0, 4).join(`, `)} and others` : actors.join(`, `);
    const formattedDuration = formatTime(duration);

    return (
      <>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(DetailsTabs).map((it, i) => {
              return (
                <li
                  key={it + i}
                  className={`movie-nav__item ${activeTab === it ? `movie-nav__item--active` : ``}`}
                >
                  <a
                    href={activeTab === it ? null : `#`}
                    className="movie-nav__link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.setState({
                        activeTab: it,
                      });
                    }}
                  >
                    {it}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <Tab isActive={activeTab === DetailsTabs.OVERVIEW}>
          <div className="movie-rating">
            <div className="movie-rating__score">{rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{ratingText}</span>
              <span className="movie-rating__count">{ratingVotes} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            {description.map((it, i) => {
              return <p key={it + i}>{it}</p>;
            })}
            <p className="movie-card__director"><strong>Director: {director}</strong></p>
            <p className="movie-card__starring"><strong>Starring: {overviewStarring}</strong></p>
          </div>
        </Tab>

        <Tab isActive={activeTab === DetailsTabs.DETAILS}>
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {actors.map((it, i) => {
                    return (
                      <React.Fragment key={it + i}>
                        {it}
                        {i < actors.length - 1 && `,`}
                        {i < actors.length - 1 && <br/>}
                      </React.Fragment>
                    );
                  })}
                </span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{formattedDuration}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{releaseYear}</span>
              </p>
            </div>
          </div>
        </Tab>

        <Tab isActive={activeTab === DetailsTabs.REVIEWS}>
          <ReviewsList comments={comments}/>
        </Tab>
      </>
    );
  }
}

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FilmPageTabs.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingVotes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

export default FilmPageTabs;
