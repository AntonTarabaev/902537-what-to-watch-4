import App from "@root/components/app/app";

const promo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promo={promo}
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
