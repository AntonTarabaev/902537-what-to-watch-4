import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";

const mock = {
  title: `Film title`,
  duration: 184,
  progress: 45,
};

it(`CLicks by player buttons calls callbacks`, () => {
  const handlePlayButtonClick = jest.fn();
  const handleFullscreenButtonClick = jest.fn();
  const handleExitButtonClick = jest.fn();

  const wrapper = shallow(
      <FullscreenPlayer
        title={mock.title}
        duration={mock.duration}
        progress={mock.progress}
        isPlaying={false}
        onPlayButtonClick={handlePlayButtonClick}
        onFullscreenButtonClick={handleFullscreenButtonClick}
        onExitButtonClick={handleExitButtonClick}
      >
        <video/>
      </FullscreenPlayer>
  );

  wrapper.find(`.player__play`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);

  wrapper.find(`.player__full-screen`).simulate(`click`);
  expect(handleFullscreenButtonClick).toHaveBeenCalledTimes(1);

  wrapper.find(`.player__exit`).simulate(`click`);
  expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
});
