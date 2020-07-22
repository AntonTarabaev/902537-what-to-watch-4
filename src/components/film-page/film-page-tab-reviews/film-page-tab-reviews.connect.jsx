import {loadComments} from "@components/film-page/operations/load-comments";
import {setComments} from "@components/film-page/actions/set-comments";
import {connect} from "react-redux";
import FilmPageTabReviews from "@components/film-page/film-page-tab-reviews/film-page-tab-reviews";

const mapStateToProps = (state) => ({
  comments: state.data.comments,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmComments(targetFilmId) {
    dispatch(loadComments(targetFilmId));
  },
  setFilmComments(comments) {
    dispatch(setComments(comments));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmPageTabReviews);
