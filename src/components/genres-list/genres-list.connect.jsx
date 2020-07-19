import {getGenres} from "@components/genres-list/selectors/genres";
import {changeActiveGenre} from "@components/genres-list/actions/change-active-genre";
import {resetShowingFilms} from "@components/genres-list/actions/reset-showing-films";
import {connect} from "react-redux";
import GenresList from "@components/genres-list/genres-list";
import {getActiveGenre} from "@components/genres-list/selectors/get-active-genre";

const mapStateToProps = (state) => ({
  activeFilter: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(changeActiveGenre(genre));
    dispatch(resetShowingFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
