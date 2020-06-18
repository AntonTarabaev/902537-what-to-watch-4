import App from "@root/components/app/app";

const filmsTitles = [
  `Bohemian Rhapsody`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Orlando`,
  `Lock, Stock and Two Smoking Barrels`,
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoTitle={`Aviator`}
      promoGenre={`Drama`}
      promoReleaseDate={2004}
      filmsTitles={filmsTitles}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
