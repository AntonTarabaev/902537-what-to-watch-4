import GenresList from "@components/genres-list/genres-list";
import {FILTER_ALL_GENRES} from "@constants/main";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";

const genres = [FILTER_ALL_GENRES, `Drama`, `Comedy`, `Thriller`];

it(`Should GenresList render correctly`, () => {
  const tree = renderer.create(
      <GenresList
        genres={genres}
        activeFilter={genres[2]}
        onFilterClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
