import Main from "@root/components/main/main";

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoTitle={`Aviator`}
      promoGenre={`Drama`}
      promoReleaseDate={2004}
      filmsTitles={filmsTitles}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
