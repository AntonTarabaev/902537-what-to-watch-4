import Review from "@components/film-page/film-page-tab-reviews/review/review";
import {Comment} from "@root/types";

class FilmPageTabReviews extends React.PureComponent {
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
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments.slice(0, Math.ceil(comments.length / 2)).map((it, i) => <Review key={it.date + i} userComment={it}/>)}
        </div>
        <div className="movie-card__reviews-col">
          {comments.slice(Math.ceil(comments.length / 2)).map((it, i) => <Review key={it.date + i} userComment={it}/>)}
        </div>
      </div>
    );
  }
}

FilmPageTabReviews.propTypes = {
  filmId: PropTypes.string.isRequired,
  loadFilmComments: PropTypes.func.isRequired,
  setFilmComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(Comment).isRequired,
};

export default FilmPageTabReviews;
