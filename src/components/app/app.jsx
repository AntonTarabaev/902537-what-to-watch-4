import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import withVideoPlayer from "@root/hocs/with-video-player/with-video-player";
import Loader from "@components/loader/loader";
import SignIn from "@components/sign-in/sign-in.connect";
import {AuthorizationStatus} from "@constants/main";

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

  const renderWithAuth = () => {
    const {authorizationStatus} = props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <SignIn/>;
    }

    return renderApp();
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp()}
        </Route>
        <Route exact path="/dev-sign-in">
          {renderWithAuth()}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  activeFilmId: PropTypes.string.isRequired,
  onFilmCardElementClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]),
};

export default App;
