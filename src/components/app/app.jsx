import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import withVideoPlayer from "@root/hocs/with-video-player/with-video-player";
import Loader from "@components/loader/loader";

const MainWithVideoPlayer = withVideoPlayer(Main);
const FilmPageWithVideoPlayer = withVideoPlayer(FilmPage);

const App = (props) => {
  const renderApp = () => {
    const {
      isLoaded,
      activeFilmId,
      onFilmCardElementClick,
    } = props;

    if (!isLoaded) {
      return <Loader/>;
    }

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
            filmId={0}
            onFilmCardElementClick={() => {}}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  activeFilmId: PropTypes.string.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
};

export default App;
