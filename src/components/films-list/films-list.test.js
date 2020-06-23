import FilmsList from "@root/components/films-list/films-list";

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
  },
  {
    title: `Aviator`,
    poster: `aviator.jpg`,
  },
];

it(`Should FilmsList render correctly`, () => {
  const tree = renderer.create(
      <FilmsList
        onHeaderClick={() => {}}
        films={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
