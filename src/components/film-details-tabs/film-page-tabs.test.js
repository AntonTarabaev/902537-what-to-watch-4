import FilmPageTabs from "@root/components/film-details-tabs/film-page-tabs";

const film = {
  id: `5593482`,
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
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  duration: 123,
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

describe(`FilmDetailsTabs component render correctly`, () => {
  it(`on Overview tab`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`on Details tab`, () => {
    const component = renderer.create(
        <FilmPageTabs
          film={film}
        />
    );

    component.root.findAllByProps({className: `movie-nav__link`})[1].props.onClick({preventDefault: () => {}});

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`on Reviews tab`, () => {
    const component = renderer.create(
        <FilmPageTabs
          film={film}
        />
    );

    component.root.findAllByProps({className: `movie-nav__link`})[2].props.onClick({preventDefault: () => {}});

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
