import Header from "@components/header/header.connect";
import {isValidComment} from "@utils/validation";
import history from "@root/history";
import {AppRoutes} from "@constants/routes";
import {Film} from "@root/types";
import {Link} from "react-router-dom";
import {changeFormElementsDisabledProperty} from "@utils/common";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAddingErrored: false,
    };

    this._commentRef = React.createRef();
    this._submitButtonRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCommentChange = this._handleCommentChange.bind(this);
  }

  componentDidMount() {
    const commentArea = this._commentRef.current;

    if (commentArea) {
      commentArea.focus();
    }
  }

  _handleCommentChange() {
    const comment = this._commentRef.current.value;
    const submitButton = this._submitButtonRef.current;
    const isCommentValid = isValidComment(comment);

    submitButton.disabled = !isCommentValid;

    if (isCommentValid) {
      submitButton.style.opacity = `1`;
    } else {
      submitButton.style.opacity = `0.1`;
    }
  }

  _handleSubmit(evt) {
    const {onSubmit, film, toggleError} = this.props;
    const filmId = film.id;
    const submitButton = this._submitButtonRef.current;

    const commentData = {
      comment: this._commentRef.current.value,
      rating: evt.target.rating.value * 2,
    };

    const onSuccess = () => {
      history.push(`${AppRoutes.FILMS}/${filmId}`);
    };

    const onError = () => {
      toggleError(true);

      changeFormElementsDisabledProperty(evt.target, false);
      submitButton.style.opacity = `1`;
    };

    evt.preventDefault();
    evt.persist();

    changeFormElementsDisabledProperty(evt.target, true);
    submitButton.style.opacity = `0.1`;

    onSubmit(commentData, filmId, onSuccess, onError);
  }

  render() {
    const {film, isErrored: isAddingErrored} = this.props;
    const {
      id,
      title,
      poster,
      bgImage,
    } = film;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={bgImage} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoutes.FILMS}/${id}`} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <Header/>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={`${title} poster`} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form"
            onSubmit={this._handleSubmit}
          >
            <div className="rating">
              <div className="rating__stars">

                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
              {isAddingErrored && <p style={{color: `red`, textAlign: `center`}}>Error adding comment... Please try again</p>}
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                ref={this._commentRef}
                onChange={this._handleCommentChange}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit"
                  ref={this._submitButtonRef}
                >
                  Post
                </button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  film: Film,
  toggleError: PropTypes.func.isRequired,
  isErrored: PropTypes.bool.isRequired,
};

export default AddReview;
