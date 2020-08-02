import GenreItem from "@components/genres-list/genre-item/genre-item";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";

describe(`GenreItem component render correctly`, () => {
  it(`with active item`, () => {
    const tree = renderer.create(
        <GenreItem
          genre={`Drama`}
          activeFilter={`Drama`}
          onFilterClick={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with not active item`, () => {
    const tree = renderer.create(
        <GenreItem
          genre={`Drama`}
          activeFilter={`Thriller`}
          onFilterClick={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
