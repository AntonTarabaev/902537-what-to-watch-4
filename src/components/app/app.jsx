import Main from "@root/components/main/main";
import {AppPages} from "@root/consts/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FilmPage from "@root/components/film-page/film-page";

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
    const {promo, films} = this.props;
    const {page, film} = this.state;

    if (films) {
      switch (page) {
        case AppPages.MAIN:
          return (
            <Main
              promo={promo}
              films={films}
              onFilmCardElementClick={this._onFilmCardElementClick}
            />
          );
        case AppPages.DETAILS:
          return (
            <FilmPage
              film={film}
              films={films}
              onFilmCardElementClick={this._onFilmCardElementClick}
            />
          );
      }
    }

    return null;
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
              films={films}
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
};

export default App;
