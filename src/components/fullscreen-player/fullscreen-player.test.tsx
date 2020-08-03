import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";
import {Film} from "@root/types";

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

it(`FullscreenPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <FullscreenPlayer
        film={film}
        progress={45}
        isPlaying={false}
        onPlayButtonClick={noop}
        onFullscreenButtonClick={noop}
      >
        <video/>
      </FullscreenPlayer>, {
        createNodeMock() {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
