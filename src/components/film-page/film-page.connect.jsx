import {connect} from "react-redux";
import FilmPage from "@components/film-page/film-page";
import {getFilmById} from "@components/film-page/selectors/get-film-by-id";
import {getSimilarFilms} from "@components/film-page/selectors/get-similar-films";

const mapStateToProps = (state, ownProps) => {
  const film = getFilmById(state, ownProps.filmId);

  return {
    film,
    similarFilms: getSimilarFilms(state, film),
  };
};

export default connect(mapStateToProps)(FilmPage);
