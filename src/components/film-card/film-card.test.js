import FilmCard from "@root/components/film-card/film-card";

const film = {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer.create(
      <FilmCard
        onFilmCardHover={() => {}}
        onFilmCardElementClick={() => {}}
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
