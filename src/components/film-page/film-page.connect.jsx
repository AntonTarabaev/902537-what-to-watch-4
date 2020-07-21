import {connect} from "react-redux";
import FilmPage from "@components/film-page/film-page";
import {getFilmById} from "@components/film-page/selectors/get-film-by-id";
import {getSimilarFilms} from "@components/film-page/selectors/get-similar-films";
import {loadComments} from "@root/components/film-page/operations/load-comments";
import {setComments} from "@root/components/film-page/actions/set-comments";

const mapStateToProps = (state, ownProps) => {
  const film = getFilmById(state, ownProps.filmId);

  return {
    film,
    comments: state.data.comments,
    similarFilms: getSimilarFilms(state, film),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmComments(targetFilmId) {
    dispatch(loadComments(targetFilmId));
  },
  setFilmComments(comments) {
    dispatch(setComments(comments));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
