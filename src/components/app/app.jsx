import Main from "@components/main/main";
import FilmPage from "@components/film-page/film-page";
import {AppPages, EXTRA_FILMS_COUNT} from "@constants/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "@root/reducer";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: AppPages.MAIN,
      film: null,
    };

    this._onFilmCardElementClick = this._onFilmCardElementClick.bind(this);
  }

  _renderApp() {
    const {
      promo,
      films,
      uniqueGenres,
      activeFilter,
      onFilterClick,
    } = this.props;
    const {page, film} = this.state;
    const extraFilms = this._getExtraFilms(film, films);

    if (films) {
      switch (page) {
        case AppPages.MAIN:
          return (
            <Main
              promo={promo}
              films={films}
              uniqueGenres={uniqueGenres}
              activeFilter={activeFilter}
              onFilterClick={onFilterClick}
              onFilmCardElementClick={this._onFilmCardElementClick}
            />
          );
        case AppPages.DETAILS:
          return (
            <FilmPage
              film={film}
              extraFilms={extraFilms}
              onFilmCardElementClick={this._onFilmCardElementClick}
            />
          );
      }
    }

    return null;
  }

  _getExtraFilms(film, films) {
    const extraFilms = [];

    if (film) {
      for (const currentFilm of films) {
        if (extraFilms.length === EXTRA_FILMS_COUNT) {
          break;
        }
        if (currentFilm.id !== film.id && currentFilm.genre === film.genre) {
          extraFilms.push(currentFilm);
        }
      }
    }

    return extraFilms;
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <FilmPage
              film={films[1]}
              extraFilms={this._getExtraFilms(films[1], films)}
              onFilmCardElementClick={this._onFilmCardElementClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _onFilmCardElementClick(targetFilm) {
    this.setState({
      page: AppPages.DETAILS,
      film: targetFilm,
    });
  }
}

App.propTypes = {
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
};

const mapStateToProps = (state) => ({
  films: state.films,
  uniqueGenres: state.filterGenres,
  activeFilter: state.filterGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeGenreFilter(genre));
    dispatch(ActionCreator.getFilteredFilms(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
