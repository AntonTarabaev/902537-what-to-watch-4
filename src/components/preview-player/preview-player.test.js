import PreviewPlayer from "@components/preview-player/preview-player";

const film = {
  poster: `bohemian-rhapsody.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer.create(
      <PreviewPlayer
        src={film.poster}
        poster={film.preview}
      />, {
        createNodeMock() {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
