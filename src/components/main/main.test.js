import Main from "@components/main/main.connect";
import {AuthorizationStatus, FILTER_ALL_GENRES} from "@constants/main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import history from "@root/history";
import {Router} from "react-router-dom";

const mockStore = configureStore([]);

const genres = [FILTER_ALL_GENRES, `Drama`, `Comedy`, `Thriller`];

const films = [
  {
    id: `573489`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `the-grand-budapest-hotel-poster.jpg`,
    bgImage: `path`,
    releaseYear: 1999,
    genre: `Drama`,
    rating: 8.2,
    ratingVotes: 197,
    director: `Some One`,
    duration: 123,
    description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    actors: [
      `Robert Rodrigues`,
      `Takeshi Kitano`,
      `Michael Caine`,
      `Robert De Niro`,
      `Tom Hanks`,
    ],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `path`,
    isFavorite: true,
  },
  {
    id: `5593482`,
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
    previewImage: `the-grand-budapest-hotel-poster.jpg`,
    bgImage: `path`,
    releaseYear: 2001,
    genre: `Comedy`,
    rating: 10,
    ratingVotes: 19,
    director: `Green One`,
    duration: 28,
    description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
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
    video: `path`,
    isFavorite: false,
  },
  {
    id: `123094`,
    title: `Aviator`,
    poster: `aviator.jpg`,
    previewImage: `the-grand-budapest-hotel-poster.jpg`,
    bgImage: `path`,
    releaseYear: 2015,
    genre: `Thriller`,
    rating: 1.2,
    ratingVotes: 97,
    director: `Red One`,
    duration: 96,
    description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: [
      `Robert Rodrigues`,
      `Robert De Niro`,
      `Tom Hanks`,
    ],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `path`,
    isFavorite: false,
  }
];

it(`Should Main render correctly`, () => {
  const store = mockStore({
    data: {
      films,
      promo: films[0],
    },
    mainPage: {
      filterGenre: genres[0],
      showingFilmsCount: 8,
    },
    user: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {
        avatar: `path`,
      },
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              isPlayerActive={false}
              renderPlayer={() => {}}
              onPlayButtonClick={() => {}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
