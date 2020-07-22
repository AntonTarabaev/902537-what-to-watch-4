import FilmCard from "@components/film-card/film-card";
import {Film} from "@root/types";

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
  films: PropTypes.arrayOf(Film).isRequired,
};

export default FilmsList;
