import {getFilmById} from "@components/film-page/selectors/get-film-by-id";
import {connect} from "react-redux";
import AddReview from "@components/add-review/add-review";
import {sendReview} from "@components/add-review/operations/send-review";

const mapStateToProps = (state, ownProps) => ({
  film: getFilmById(state, ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData, filmId, onSuccess, onError) {
    dispatch(sendReview(commentData, filmId, onSuccess, onError));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
