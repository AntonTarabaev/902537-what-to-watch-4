import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MOCK_FILMS} from "@root/mocks/films";

class App extends React.PureComponent {
  _renderApp() {
    const {
      activeFilmId,
      onFilmCardElementClick,
    } = this.props;

    if (activeFilmId !== -1) {
      return (
        <FilmPage
          filmId={activeFilmId}
          onFilmCardElementClick={onFilmCardElementClick}
        />
      );
    }

    return (
      <Main
        onFilmCardElementClick={onFilmCardElementClick}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <FilmPage
              filmId={MOCK_FILMS[1].id}
              onFilmCardElementClick={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  activeFilmId: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
};

export default App;
