import Review from "@components/reviews-list/review/review";

const ReviewsList = (props) => {
  const {comments} = props;

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
};

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ReviewsList;
