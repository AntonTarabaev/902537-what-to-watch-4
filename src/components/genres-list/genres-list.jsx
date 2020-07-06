const GenresList = (props) => {
  const {genres, activeFilter, onFilterClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => (
        <li
          key={`genre-${it}`}
          className={`catalog__genres-item ${it === activeFilter ? `catalog__genres-item--active` : ``}`}
        >
          <a
            href={it === activeFilter ? null : `#`}
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              return it !== activeFilter && onFilterClick(it);
            }}
          >
            {it}
          </a>
        </li>
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
