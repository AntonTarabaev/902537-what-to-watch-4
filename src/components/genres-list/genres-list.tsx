import GenreItem from "@components/genres-list/genre-item/genre-item";

interface Props {
  genres: string[];
  activeFilter: string;
  onFilterClick: () => void;
}

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
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

export default GenresList;
