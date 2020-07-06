import GenresList from "@components/genres-list/genres-list";
import {FILTER_ALL_GENRES} from "@constants/main";

const genres = [FILTER_ALL_GENRES, `Drama`, `Comedy`, `Thriller`];

it(`Should genres elements in GenresList be clicked`, () => {
  const onFilterClick = jest.fn();

  const genresList = shallow(
      <GenresList
        genres={genres}
        activeFilter={genres[0]}
        onFilterClick={onFilterClick}
      />
  );

  const genreItemAll = genresList.find(`a.catalog__genres-link`).at(0);
  genreItemAll.simulate(`click`, {preventDefault() {}});

  const genreItemDrama = genresList.find(`a.catalog__genres-link`).at(1);
  genreItemDrama.simulate(`click`, {preventDefault() {}});

  expect(onFilterClick).toHaveBeenCalledTimes(1);
});

it(`When user click genres elements prevent link default behavior`, () => {
  const onFilterClick = jest.fn();

  const genresList = shallow(
      <GenresList
        genres={genres}
        activeFilter={genres[0]}
        onFilterClick={onFilterClick}
      />
  );

  const genreItemDrama = genresList.find(`a.catalog__genres-link`).at(1);
  const linkDefaultBehaviorPrevention = jest.fn();
  genreItemDrama.simulate(`click`, {
    preventDefault: linkDefaultBehaviorPrevention,
  });

  expect(onFilterClick).toHaveBeenCalledTimes(1);
  expect(linkDefaultBehaviorPrevention).toHaveBeenCalledTimes(1);
});
