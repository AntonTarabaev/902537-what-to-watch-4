import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MOCK_FILMS} from "@root/mocks/films";
import withVideoPlayer from "@root/hocs/with-video-player/with-video-player";

const MainWithVideoPlayer = withVideoPlayer(Main);
const FilmPageWithVideoPlayer = withVideoPlayer(FilmPage);

const App = (props) => {
  const renderApp = () => {
    const {
      activeFilmId,
      onFilmCardElementClick,
    } = props;

    if (activeFilmId !== `-1`) {
      return (
        <FilmPageWithVideoPlayer
          filmId={activeFilmId}
          onFilmCardElementClick={onFilmCardElementClick}
        />
      );
    }

    return (
      <MainWithVideoPlayer
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
