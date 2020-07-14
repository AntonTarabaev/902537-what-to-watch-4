import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MOCK_FILMS} from "@root/mocks/films";

const App = (props) => {
  const renderApp = () => {
    const {
      activeFilmId,
      onFilmCardElementClick,
    } = props;

    if (activeFilmId !== `-1`) {
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
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp()}
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
};

App.propTypes = {
  activeFilmId: PropTypes.string.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
};

export default App;
