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

const GenreItems = [
  `Cartoon`,
  `Comedy`,
  `Drama`,
  `Western`,
  `Musical`,
  `Mystery`,
  `Film-Noir`,
];

const DescriptionItems = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

const PeopleItems = [
  `Tim Macoveev`,
  `John Doe`,
  `James Abrams`,
  `Tomas Brown`,
  `Adam J`,
  `Bruce Wayne`,
  `Quentin Tarantino`,
  `Robert Rodrigues`,
  `Takeshi Kitano`,
  `Michael Caine`,
  `Robert De Niro`,
  `Tom Hanks`,
];

const getRandomFloatNumber = (min, max) => Math.random() * (max - min) + min;

const getRandomIntNumber = (min, max) => Math.floor(getRandomFloatNumber(min, max + 1));

const getRandomArrayItem = (array) => array[getRandomIntNumber(0, array.length - 1)];

const generateFilm = () => {
  return {
    title: getRandomArrayItem(FilmTitleItems),
    poster: getRandomArrayItem(PosterItems),
    releaseYear: getRandomIntNumber(1990, 2020),
    genre: getRandomArrayItem(GenreItems),
    rating: getRandomFloatNumber(0, 10).toFixed(1),
    ratingVotes: getRandomIntNumber(1, 10000),
    director: getRandomArrayItem(PeopleItems),
    description: DescriptionItems
      .sort(() => Math.random() - 0.5)
      .slice(0, getRandomIntNumber(2, 4)),
    actors: PeopleItems
      .sort(() => Math.random() - 0.5)
      .slice(0, getRandomIntNumber(3, 6)),
  };
};

export const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};
