import {getFilmsByFilter} from "@components/main/selectors/get-films-by-filter";
import {incrementShowingFilms} from "@components/main/actions/increment-showing-films";
import Main from "@components/main/main";
import {connect} from "react-redux";
import {changeFilmIsFavorite} from "@components/film-page/operations/change-film-is-favorite";

const mapStateToProps = (state) => ({
  films: getFilmsByFilter(state),
  promo: state.data.promo,
  showingFilmsCount: state.mainPage.showingFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(incrementShowingFilms());
  },
  onFavoriteChange(isFavorite, filmId) {
    dispatch(changeFilmIsFavorite(isFavorite, filmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
