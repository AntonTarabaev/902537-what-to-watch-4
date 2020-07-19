import {getComments} from "@root/hocs/with-reviews/selectors/get-comments";
import {loadComments} from "@root/hocs/with-reviews/operations/load-comments";
import {connect} from "react-redux";
import {setComments} from "@root/hocs/with-reviews/actions/set-comments";

const withReviews = (Component) => {
  class WithReviews extends React.PureComponent {
    componentDidMount() {
      const {loadFilmComments, filmId} = this.props;

      loadFilmComments(filmId);
    }

    componentWillUnmount() {
      const {setFilmComments} = this.props;

      setFilmComments([]);
    }

    componentDidUpdate(prevProps) {
      const {filmId} = this.props;

      if (filmId !== prevProps.filmId) {
        const {loadFilmComments} = this.props;

        loadFilmComments(filmId);
      }
    }

    render() {
      const {comments} = this.props;

      return (
        <Component
          {...this.props}
          comments={comments}
        />
      );
    }
  }

  WithReviews.propTypes = {
    filmId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    loadFilmComments: PropTypes.func.isRequired,
    setFilmComments: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    comments: getComments(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    loadFilmComments(targetFilmId) {
      dispatch(loadComments(targetFilmId));
    },
    setFilmComments(comments) {
      dispatch(setComments(comments));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};

export default withReviews;
