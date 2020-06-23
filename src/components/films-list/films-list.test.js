import FilmsList from "@root/components/films-list/films-list";

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    releaseYear: 1999,
    genre: `Drama`,
    rating: 8.2,
    ratingVotes: 197,
    director: `Some One`,
    description: [
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    ],
    actors: [
      `Robert Rodrigues`,
      `Takeshi Kitano`,
      `Michael Caine`,
      `Robert De Niro`,
      `Tom Hanks`,
    ],
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    releaseYear: 2001,
    genre: `Comedy`,
    rating: 10,
    ratingVotes: 19,
    director: `Green One`,
    description: [
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
      `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    ],
    actors: [
      `Robert Rodrigues`,
      `Takeshi Kitano`,
      `Michael Caine`,
      `Robert De Niro`,
      `Tom Hanks`,
      `Takeshi Kitano`,
      `Michael Caine`,
    ],
  },
  {
    title: `Aviator`,
    poster: `aviator.jpg`,
    releaseYear: 2015,
    genre: `Thriller`,
    rating: 1.2,
    ratingVotes: 97,
    director: `Red One`,
    description: [
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    ],
    actors: [
      `Robert Rodrigues`,
      `Robert De Niro`,
      `Tom Hanks`,
    ],
  },
];

it(`Should FilmsList render correctly`, () => {
  const tree = renderer.create(
      <FilmsList
        onFilmCardElementClick={() => {}}
        films={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
