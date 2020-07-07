import {getGenres} from "@components/genres-list/selectors/genres";
import {changeActiveGenre} from "@components/genres-list/actions/change-active-genre";
import {resetShowingFilms} from "@components/genres-list/actions/reset-showing-films";
import {connect} from "react-redux";
import GenresList from "@components/genres-list/genres-list";

const mapStateToProps = (state) => ({
  activeFilter: state.mainPage.filterGenre,
  genres: getGenres(state.data),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(changeActiveGenre(genre));
    dispatch(resetShowingFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
