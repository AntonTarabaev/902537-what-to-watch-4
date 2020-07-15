const GenreItem = (props) => {
  const {genre, activeFilter, onFilterClick} = props;

  const onGenreTitleClick = (evt) => {
    evt.preventDefault();
    return genre !== activeFilter && onFilterClick(genre);
  };

  return (
    <li
      className={`catalog__genres-item ${genre === activeFilter ? `catalog__genres-item--active` : ``}`}
    >
      <a
        href={genre === activeFilter ? null : `#`}
        className="catalog__genres-link"
        onClick={onGenreTitleClick}
      >
        {genre}
      </a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default GenreItem;
