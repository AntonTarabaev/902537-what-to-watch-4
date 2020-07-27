import {connect} from "react-redux";
import FilmPage from "@components/film-page/film-page";
import {getFilmById} from "@components/film-page/selectors/get-film-by-id";
import {getSimilarFilms} from "@components/film-page/selectors/get-similar-films";

const mapStateToProps = (state, ownProps) => {
  const film = getFilmById(state, ownProps.match.params.id);

  return {
    authorizationStatus: state.user.authorizationStatus,
    film,
    similarFilms: getSimilarFilms(state, film),
  };
};

export default connect(mapStateToProps)(FilmPage);
