import FilmPageTabOverview from "@components/film-page/film-page-tab-overview/film-page-tab-overview";
import {Film} from "@root/types";
import * as renderer from "react-test-renderer";

const film: Film = {
  id: `573489`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewImage: `the-grand-budapest-hotel-poster.jpg`,
  bgImage: `path`,
  releaseYear: 1999,
  genre: `Drama`,
  rating: 8.2,
  ratingVotes: 197,
  director: `Some One`,
  duration: 123,
  description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  actors: [
    `Robert Rodrigues`,
    `Takeshi Kitano`,
    `Michael Caine`,
    `Robert De Niro`,
    `Tom Hanks`,
  ],
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  video: `path`,
  isFavorite: true,
};

it(`Should FilmPageTabOverview render correctly`, () => {
  const tree = renderer.create(
      <FilmPageTabOverview
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
