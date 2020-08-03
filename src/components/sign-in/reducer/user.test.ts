import {user} from "@components/sign-in/reducer/user";
import {AuthorizationStatus, Film, User} from "@root/types";
import {UserActionTypes} from "@constants/action-types";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {setUserData} from "@components/sign-in/actions/set-user-data";
import {setFavorite} from "@components/my-list/actions/set-favorite";
import {extend} from "../../../utils/common";

const testState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: null,
  favoriteFilms: [],
};

const mockUser: User = {
  id: `432`,
  email: `mail`,
  name: `someone`,
  avatar: `path`
};

const mockFilms: Film[] = [
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

describe(`User reducer work properly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {
      type: null,
      payload: null,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: null,
      favoriteFilms: [],
    });
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(user(testState, {
      type: UserActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual(extend(testState, {
      authorizationStatus: AuthorizationStatus.AUTH,
    }));

    expect(user(testState, {
      type: UserActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual(extend(testState, {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }));

    expect(user({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: null,
      favoriteFilms: [],
    }, {
      type: UserActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: null,
      favoriteFilms: [],
    });

    expect(user({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: null,
      favoriteFilms: [],
    }, {
      type: UserActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: null,
      favoriteFilms: [],
    });
  });

  it(`Reducer should change user data by a given value`, () => {
    expect(user(testState, {
      type: UserActionTypes.SET_USER_DATA,
      payload: mockUser,
    })).toEqual(extend(testState, {
      userData: mockUser,
    }));

    expect(user({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: mockUser,
      favoriteFilms: [],
    }, {
      type: UserActionTypes.SET_USER_DATA,
      payload: {
        name: `foo`,
        id: `112`,
        avatar: `bar`,
        email: `mail`,
      },
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      favoriteFilms: [],
      userData: {
        name: `foo`,
        id: `112`,
        avatar: `bar`,
        email: `mail`,
      },
    });
  });

  it(`Reducer should change favorite films by a given value`, () => {
    expect(user(testState, {
      type: UserActionTypes.SET_FAVORITE,
      payload: mockFilms,
    })).toEqual(extend(testState, {
      favoriteFilms: mockFilms,
    }));

    expect(user({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: null,
      favoriteFilms: mockFilms,
    }, {
      type: UserActionTypes.SET_FAVORITE,
      payload: mockFilms.slice(1, 2),
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: null,
      favoriteFilms: mockFilms.slice(1, 2),
    });
  });

  describe(`Action creators work correctly`, () => {
    it(`Action creator for require authorization returns correct action`, () => {
      expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
        type: UserActionTypes.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      });

      expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
        type: UserActionTypes.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });

    it(`Action creator for set user data returns correct action`, () => {
      expect(setUserData(mockUser)).toEqual({
        type: UserActionTypes.SET_USER_DATA,
        payload: mockUser,
      });
    });

    it(`Action creator for set favorite films returns correct action`, () => {
      expect(setFavorite(mockFilms)).toEqual({
        type: UserActionTypes.SET_FAVORITE,
        payload: mockFilms,
      });
    });
  });
});
