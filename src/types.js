export const Film = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingVotes: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  preview: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;

export const Comment = PropTypes.shape({
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  rating: PropTypes.number.isRequired,
}).isRequired;
