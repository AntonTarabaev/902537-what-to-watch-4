import FilmPageTabDetails from "@components/film-page/film-page-tab-details/film-page-tab-details";

const film = {
  id: `573489`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  releaseYear: 1999,
  genre: `Drama`,
  rating: 8.2,
  ratingVotes: 197,
  director: `Some One`,
  duration: 123,
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
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  comments: [
    {
      author: `John Doe`,
      rating: 8.9,
      date: new Date(8475893),
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
    },
    {
      author: `Robert Rodrigues`,
      rating: 5.4,
      date: new Date(4231284),
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna`,
    }
  ]
};

it(`Should FilmPageTabDetails render correctly`, () => {
  const tree = renderer.create(
      <FilmPageTabDetails
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
