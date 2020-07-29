import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";

const film = {
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
  comments: [
    {
      author: `John Doe`,
      rating: 8.9,
      date: new Date(8475893),
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
    },
    {
      author: `Robert Rodrigues`,
      rating: 5.4,
      date: new Date(4231284),
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna`,
    }
  ],
  video: `path`,
  isFavorite: true,
};

it(`CLicks by player buttons calls callbacks`, () => {
  const handlePlayButtonClick = jest.fn();
  const handleFullscreenButtonClick = jest.fn();

  const wrapper = shallow(
      <FullscreenPlayer
        film={film}
        progress={45}
        isPlaying={false}
        onPlayButtonClick={handlePlayButtonClick}
        onFullscreenButtonClick={handleFullscreenButtonClick}
      >
        <video/>
      </FullscreenPlayer>
  );

  wrapper.find(`.player__play`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);

  wrapper.find(`.player__full-screen`).simulate(`click`);
  expect(handleFullscreenButtonClick).toHaveBeenCalledTimes(1);
});
