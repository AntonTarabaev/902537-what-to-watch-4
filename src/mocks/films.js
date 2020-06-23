const FilmTitleItems = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Lock, Stock and Two Smoking Barrels`,
];

const PosterItems = [
  `aviator.jpg`,
  `bohemian-rhapsody.jpg`,
  `dardjeeling-limited.jpg`,
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `johnny-english.jpg`,
  `macbeth.jpg`,
  `midnight-special.jpg`,
  `mindhunter.jpg`,
  `moonrise-kingdom.jpg`,
  `no-country-for-old-men.jpg`,
  `orlando.jpg`,
  `pulp-fiction.jpg`,
  `revenant.jpg`,
  `seven-years-in-tibet.jpg`,
  `shutter-island.jpg`,
  `snatch.jpg`,
  `war-of-the-worlds.jpg`,
  `we-need-to-talk-about-kevin.jpg`,
  `what-we-do-in-the-shadows.jpg`,
];

const getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomArrayItem = (array) => array[getRandomIntNumber(0, array.length - 1)];

const generateFilm = () => {
  return {
    title: getRandomArrayItem(FilmTitleItems),
    poster: getRandomArrayItem(PosterItems),
  };
};

export const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};
