import FilmCard from "@components/film-card/film-card";

const FilmsList = (props) => {
  const {
    films,
    onFilmCardElementClick,
    activeFilmCardId,
    onFilmCardMouseEnter,
    onFilmCardMouseLeave,
  } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <FilmCard
          key={`${i}-${film.poster}`}
          onFilmCardMouseEnter={onFilmCardMouseEnter}
          onFilmCardMouseLeave={onFilmCardMouseLeave}
          onFilmCardElementClick={onFilmCardElementClick}
          isActive={activeFilmCardId === film.id}
          film={film}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  onFilmCardElementClick: PropTypes.func.isRequired,
  activeFilmCardId: PropTypes.string.isRequired,
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingVotes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    preview: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default FilmsList;
