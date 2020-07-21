const withReviews = (Component) => {
  class WithReviews extends React.PureComponent {
    componentDidMount() {
      const {loadFilmComments, filmId} = this.props;

      loadFilmComments(filmId);
    }

    componentWillUnmount() {
      const {setFilmComments} = this.props;

      setFilmComments();
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

  return WithReviews;
};

export default withReviews;
