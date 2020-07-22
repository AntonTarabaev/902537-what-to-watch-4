import {formatDate} from "@utils/common";
import {Comment} from "@root/types";

const Review = (props) => {
  const {userComment} = props;
  const {author, rating, date, comment} = userComment;

  const formattedDate = formatDate(date);
  const dateTime = date.toISOString().split(`T`)[0];

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  userComment: Comment,
};

export default Review;
