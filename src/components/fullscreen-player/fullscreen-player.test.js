import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";

const mock = {
  title: `Film title`,
  duration: 184,
  progress: 45,
};

it(`FullscreenPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <FullscreenPlayer
        title={mock.title}
        duration={mock.duration}
        progress={mock.progress}
        isPlaying={false}
        onPlayButtonClick={() => {}}
        onFullscreenButtonClick={() => {}}
        onExitButtonClick={() => {}}
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
