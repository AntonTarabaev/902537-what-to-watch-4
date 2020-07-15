import GenreItem from "@components/genres-list/genre-item/genre-item";

describe(`GenreItem component render correctly`, () => {
  it(`with active item`, () => {
    const tree = renderer.create(
        <GenreItem
          genre={`Drama`}
          activeFilter={`Drama`}
          onFilterClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with not active item`, () => {
    const tree = renderer.create(
        <GenreItem
          genre={`Drama`}
          activeFilter={`Thriller`}
          onFilterClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
