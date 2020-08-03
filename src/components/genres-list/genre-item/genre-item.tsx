interface Props {
  genre: string;
  activeFilter: string;
  onFilterClick: (genre: string) => void;
}

const GenreItem: React.FunctionComponent<Props> = (props: Props) => {
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

export default React.memo(GenreItem);
