import GenreItem from "@components/genres-list/genre-item/genre-item";
describe(`Should tab nav title click handler work properly`, () => {
  it(`with active item`, () => {
    const genreItemTitleClickHandler = jest.fn();

    const genreItem = shallow(
        <GenreItem
          genre={`Drama`}
          activeFilter={`Drama`}
          onFilterClick={genreItemTitleClickHandler}
        />
    );

    const title = genreItem.find(`a.catalog__genres-link`);
    title.simulate(`click`, {preventDefault() {}});

    expect(genreItemTitleClickHandler).toHaveBeenCalledTimes(0);
  });

  it(`with not active item`, () => {
    const genreItemTitleClickHandler = jest.fn();

    const genreItem = shallow(
        <GenreItem
          genre={`Drama`}
          activeFilter={`Thriller`}
          onFilterClick={genreItemTitleClickHandler}
        />
    );

    const title = genreItem.find(`a.catalog__genres-link`);
    title.simulate(`click`, {preventDefault() {}});

    expect(genreItemTitleClickHandler).toHaveBeenCalledTimes(1);
  });
});


it(`When user click tab nav title prevent link default behavior`, () => {
  const genreItemTitleClickHandler = jest.fn();

  const genreItem = shallow(
      <GenreItem
        genre={`Drama`}
        activeFilter={`Thriller`}
        onFilterClick={genreItemTitleClickHandler}
      />
  );

  const title = genreItem.find(`a.catalog__genres-link`);
  const linkDefaultBehaviorPrevention = jest.fn();
  title.simulate(`click`, {
    preventDefault: linkDefaultBehaviorPrevention,
  });

  expect(genreItemTitleClickHandler).toHaveBeenCalledTimes(1);
  expect(linkDefaultBehaviorPrevention).toHaveBeenCalledTimes(1);
});
