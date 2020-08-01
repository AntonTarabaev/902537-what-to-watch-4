import GenreItem from "@components/genres-list/genre-item/genre-item";

const GenresList = (props) => {
  const {genres, activeFilter, onFilterClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => (
        <GenreItem
          key={`genre-${it}`}
          genre={it}
          activeFilter={activeFilter}
          onFilterClick={onFilterClick}
        />
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default GenresList;
