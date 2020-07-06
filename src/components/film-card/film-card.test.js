import FilmCard from "@components/film-card/film-card";

const film = {
  id: `13457894`,
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer.create(
      <FilmCard
        onFilmCardMouseEnter={() => {}}
        onFilmCardMouseLeave={() => {}}
        onFilmCardElementClick={() => {}}
        isActive={false}
        film={film}
      />, {
        createNodeMock() {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
