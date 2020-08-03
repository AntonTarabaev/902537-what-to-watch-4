import FilmPageTabReviews from "@components/film-page/film-page-tab-reviews/film-page-tab-reviews";
import {Comment} from "@root/types";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";

const comments: Comment[] = [
  {
    id: 1,
    author: `John Doe`,
    authorId: 123,
    rating: 8.9,
    date: new Date(8475893),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  },
  {
    id: 2,
    author: `Robert Rodrigues`,
    authorId: 321,
    rating: 5.4,
    date: new Date(4231284),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna`,
  }
];

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer.create(
      <FilmPageTabReviews
        filmId={`123`}
        loadFilmComments={noop}
        setFilmComments={noop}
        comments={comments}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
