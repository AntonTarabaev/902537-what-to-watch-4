import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {Switch, Route, Router} from "react-router-dom";
import withVideoPlayer from "@root/hocs/with-video-player/with-video-player";
import Loader from "@components/loader/loader";
import SignIn from "@components/sign-in/sign-in.connect";
import {AppRoutes} from "@constants/routes";
import history from "@root/history";
import withValidation from "@root/hocs/with-validation/with-validation";
import NotFound from "@components/not-found/not-found";

const MainWithVideoPlayer = withVideoPlayer(Main);
const FilmPageWithVideoPlayer = withVideoPlayer(FilmPage);
const SignInWithValidation = withValidation(SignIn);

const App = (props) => {
  const {
    isLoaded,
  } = props;

  return (
    <Router history={history}>
      <Switch>
        {!isLoaded && <Route component={Loader}/>}

        <Route exact path={AppRoutes.MAIN} component={MainWithVideoPlayer}/>

        <Route exact path={`${AppRoutes.FILMS}/:id`} component={FilmPageWithVideoPlayer}/>

        <Route exact path={AppRoutes.LOGIN} component={SignInWithValidation}/>

        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default App;
