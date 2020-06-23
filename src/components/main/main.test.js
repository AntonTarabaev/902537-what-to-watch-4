import Main from "@root/components/main/main";

const promo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
  BG: `bg-the-grand-budapest-hotel.jpg`,
  POSTER: `the-grand-budapest-hotel-poster.jpg`,
};

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promo={promo}
      films={films}
      onFilmCardElementClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
