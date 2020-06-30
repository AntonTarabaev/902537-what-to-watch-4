import FilmPage from "@root/components/film-page/film-page";

const film = {
  id: `5593482`,
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  releaseYear: 2001,
  genre: `Comedy`,
  rating: 10,
  ratingVotes: 19,
  director: `Green One`,
  duration: 123,
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
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  comments: [
    {
      author: `Quentin Tarantino`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis.. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
      date: new Date(4827394),
      rating: 1.7,
    },
    {
      author: `Tom Hanks`,
      comment: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      date: new Date(89321),
      rating: 2.3,
    },
    {
      author: `Michael Caine`,
      comment: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      date: new Date(983928),
      rating: 3.8,
    }
  ]
};

it(`Should FilmPage render correctly`, () => {
  const tree = renderer.create(
      <FilmPage
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
