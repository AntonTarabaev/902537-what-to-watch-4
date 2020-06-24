import FilmPage from "@root/components/film-page/film-page";

const film = {
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
};

it(`Should FilmPage render correctly`, () => {
  const tree = renderer.create(
      <FilmPage
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
