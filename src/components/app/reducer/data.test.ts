import {data} from "@components/app/reducer/data";
import {AppActionTypes} from "@constants/action-types";
import {extend, noop} from "@utils/common";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@root/api";
import {loadData} from "@components/app/operations/load-data";
import {ServerRoutes} from "@constants/routes";
import {loadComments} from "@components/film-page/operations/load-comments";
import {parseFilm, parseFilms} from "@root/adapters/films";
import {setLoadedStatus} from "@components/app/actions/set-loaded-status";
import {setFilms} from "@components/app/actions/set-films";
import {setComments} from "@components/film-page/actions/set-comments";
import {setFilmIsFavorite} from "@components/app/actions/set-film-is-favorite";
import {setPromo} from "@components/app/actions/set-promo";
import {Comment, Film} from "../../../types";

const films: Film[] = [
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

const comments: Comment[] = [
  {
    id: 1,
    author: `John Doe`,
    authorId: 123,
    rating: 8.9,
    date: new Date(8475893),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  },
  {
    id: 2,
    author: `Robert Rodrigues`,
    authorId: 321,
    rating: 5.4,
    date: new Date(4231284),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna`,
  }
];

const api = createAPI(noop);

const testInitialState = {
  films,
  promo: films[0],
  comments,
  isLoaded: true,
};

describe(`Data reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {
      type: null,
      payload: null,
    })).toEqual({
      films: [],
      promo: null,
      comments: [],
      isLoaded: false,
    });
  });

  it(`Reducer should change loadedStatus by a given value`, () => {
    expect(data(testInitialState, {
      type: AppActionTypes.SET_LOADED_STATUS,
      payload: false,
    })).toEqual(extend(testInitialState, {
      isLoaded: false,
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_LOADED_STATUS,
      payload: true,
    })).toEqual(extend(testInitialState, {
      isLoaded: true,
    }));
  });

  it(`Reducer should change films by a given value`, () => {
    expect(data(testInitialState, {
      type: AppActionTypes.SET_FILMS,
      payload: films.slice(1, 2),
    })).toEqual(extend(testInitialState, {
      films: films.slice(1, 2),
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_FILMS,
      payload: films,
    })).toEqual(extend(testInitialState, {
      films,
    }));
  });

  it(`Reducer should change promo by a given value`, () => {
    expect(data(testInitialState, {
      type: AppActionTypes.SET_PROMO,
      payload: films[2],
    })).toEqual(extend(testInitialState, {
      promo: films[2],
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_PROMO,
      payload: films[0],
    })).toEqual(extend(testInitialState, {
      promo: films[0],
    }));
  });

  it(`Reducer should change comments by a given value`, () => {
    expect(data(testInitialState, {
      type: AppActionTypes.SET_COMMENTS,
      payload: comments,
    })).toEqual(extend(testInitialState, {
      comments,
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_COMMENTS,
      payload: comments.slice(1, 2),
    })).toEqual(extend(testInitialState, {
      comments: comments.slice(1, 2),
    }));
  });

  it(`Reducer should change film favorite`, () => {
    expect(data(testInitialState, {
      type: AppActionTypes.SET_FILM_IS_FAVORITE,
      payload: films[0],
    })).toEqual(extend(testInitialState, {
      promo: films[0],
      films,
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_FILM_IS_FAVORITE,
      payload: films[1],
    })).toEqual(extend(testInitialState, {
      films,
    }));
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for set loaded status returns correct action`, () => {
    expect(setLoadedStatus()).toEqual({
      type: AppActionTypes.SET_LOADED_STATUS,
      payload: true,
    });
  });

  it(`Action creator for set films returns correct action`, () => {
    expect(setFilms(films)).toEqual({
      type: AppActionTypes.SET_FILMS,
      payload: films,
    });
  });

  it(`Action creator for set comments returns correct action`, () => {
    expect(setComments(comments)).toEqual({
      type: AppActionTypes.SET_COMMENTS,
      payload: comments,
    });
  });

  it(`Action creator for set promo returns correct action`, () => {
    expect(setPromo(films[1])).toEqual({
      type: AppActionTypes.SET_PROMO,
      payload: films[1],
    });
  });

  it(`Action creator for set film is favorite returns correct action`, () => {
    expect(setFilmIsFavorite(films[2])).toEqual({
      type: AppActionTypes.SET_FILM_IS_FAVORITE,
      payload: films[2],
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Should make a correct API call to data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = loadData();

    apiMock
      .onGet(ServerRoutes.FILMS)
      .reply(200, films)
      .onGet(ServerRoutes.PROMO)
      .reply(200, films[0]);

    return dataLoader(dispatch, () => testInitialState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AppActionTypes.SET_PROMO,
          payload: parseFilm(films[0]),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AppActionTypes.SET_FILMS,
          payload: parseFilms(films),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: AppActionTypes.SET_LOADED_STATUS,
          payload: true,
        });
      });
  });

  it(`Should make a correct API call to comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = loadComments(`111`);

    apiMock
      .onGet(`${ServerRoutes.COMMENTS}/111`)
      .reply(200, []);

    return commentsLoader(dispatch, () => testInitialState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AppActionTypes.SET_COMMENTS,
          payload: [],
        });
      });
  });
});
