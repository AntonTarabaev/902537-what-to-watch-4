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

it(`Should header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        promoTitle={`Aviator`}
        promoGenre={`Drama`}
        promoReleaseDate={2004}
        filmsTitles={filmsTitles}
        onHeaderClick={onHeaderClick}
      />
  );

  const headers = main.find(`a.small-movie-card__link`);

  headers.map((it) => {
    it.simulate(`click`);
  });

  expect(onHeaderClick).toHaveBeenCalledTimes(filmsTitles.length);
});
