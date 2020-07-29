import {connect} from "react-redux";
import FilmPage from "@components/film-page/film-page";
import {getFilmById} from "@components/film-page/selectors/get-film-by-id";
import {getSimilarFilms} from "@components/film-page/selectors/get-similar-films";
import {changeFilmIsFavorite} from "@components/film-page/operations/change-film-is-favorite";

const mapStateToProps = (state, ownProps) => {
  const film = getFilmById(state, ownProps.match.params.id);

  return {
    authorizationStatus: state.user.authorizationStatus,
    film,
    similarFilms: getSimilarFilms(state, film),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteChange(isFavorite, filmId) {
    dispatch(changeFilmIsFavorite(isFavorite, filmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
