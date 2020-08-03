import FilmCard from "@components/film-card/film-card";
import {Film} from "@root/types";

interface Props {
  activeFilmCardId: string;
  onFilmCardMouseEnter: () => void;
  onFilmCardMouseLeave: () => void;
  films: Film[];
}

const FilmsList: React.FunctionComponent<Props> = (props: Props) => {
  const {
    films,
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
          isActive={activeFilmCardId === film.id}
          film={film}
        />
      ))}
    </div>
  );
};

export default FilmsList;
