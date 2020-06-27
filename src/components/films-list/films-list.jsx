import FilmCard from "@root/components/film-card/film-card";
import {FILM_CARD_ACTIVATION_DELAY} from "@root/consts/main";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCardId: null,
      filmCardActivationTimeout: null,
    };

    this._filmCardMouseEnterHandler = this._filmCardMouseEnterHandler.bind(this);
    this._filmCardMouseLeaveHandler = this._filmCardMouseLeaveHandler.bind(this);
  }

  render() {
    const {films, onFilmCardElementClick} = this.props;
    const {activeFilmCardId} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <FilmCard
            key={`${i}-${film.poster}`}
            onFilmCardMouseEnter={this._filmCardMouseEnterHandler}
            onFilmCardMouseLeave={this._filmCardMouseLeaveHandler}
            onFilmCardElementClick={onFilmCardElementClick}
            isActive={activeFilmCardId === film.id}
            film={film}
          />
        ))}
      </div>
    );
  }

  componentWillUnmount() {
    const {filmCardActivationTimeout} = this.state;

    clearTimeout(filmCardActivationTimeout);
  }

  _filmCardMouseEnterHandler(filmId) {
    const timeout = setTimeout(() => {
      this.setState({
        activeFilmCardId: filmId,
      });
    }, FILM_CARD_ACTIVATION_DELAY);

    this.setState({
      filmCardActivationTimeout: timeout,
    });
  }

  _filmCardMouseLeaveHandler() {
    const {filmCardActivationTimeout} = this.state;

    clearTimeout(filmCardActivationTimeout);
    this.setState({
      activeFilmCardId: null,
      filmCardActivationTimeout: null,
    });
  }
}

FilmsList.propTypes = {
  onFilmCardElementClick: PropTypes.func.isRequired,
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
  }).isRequired).isRequired,
};

export default FilmsList;
