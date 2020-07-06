import Main from "@components/main/main";
import {FILTER_ALL_GENRES} from "@constants/main";

const promo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
  BG: `bg-the-grand-budapest-hotel.jpg`,
  POSTER: `the-grand-budapest-hotel-poster.jpg`,
};

const genres = [FILTER_ALL_GENRES, `Drama`, `Comedy`, `Thriller`];

const films = [
  {
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
  },
  {
    id: `5593482`,
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    releaseYear: 2001,
    genre: `Comedy`,
    rating: 10,
    ratingVotes: 19,
    director: `Green One`,
    duration: 28,
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
  },
  {
    id: `123094`,
    title: `Aviator`,
    poster: `aviator.jpg`,
    releaseYear: 2015,
    genre: `Thriller`,
    rating: 1.2,
    ratingVotes: 97,
    director: `Red One`,
    duration: 96,
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    comments: [
      {
        author: `Robert De Niro`,
        rating: 7.2,
        date: new Date(49038),
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing…d nisi sed augue convallis suscipit in sed felis.`
      },
      {
        author: `Robert De Niro`,
        rating: 9.8,
        date: new Date(847342),
        comment: `Fusce tristique felis at fermentum pharetra. Aliqu…nvallis sed finibus eget, sollicitudin eget ante.`
      },
      {
        author: `Bruce Wayne`,
        rating: 3.1,
        date: new Date(23486789326443764),
        comment: `Phasellus eros mauris, condimentum sed nibh vitae,…urus ex euismod diam, eu luctus nunc ante ut dui.`
      },
    ],
  }
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promo={promo}
      films={films}
      uniqueGenres={genres}
      activeFilter={genres[0]}
      onFilmCardElementClick={() => {}}
      onFilterClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
