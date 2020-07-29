import {data} from "@components/app/reducer/data";
import {AppActionTypes} from "@constants/action-types";
import {extend} from "@utils/common";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@root/api";
import {loadData} from "@components/app/operations/load-data";
import {ServerRoutes} from "@constants/routes";
import {loadComments} from "@root/components/film-page/operations/load-comments";
import {parseFilm, parseFilms} from "@root/adapters/films";
import {setLoadedStatus} from "@components/app/actions/set-loaded-status";
import {setFilms} from "@components/app/actions/set-films";
import {setComments} from "@components/film-page/actions/set-comments";
import {setFilmIsFavorite} from "@components/app/actions/set-film-is-favorite";
import {setPromo} from "@components/app/actions/set-promo";

const films = [
  {
    id: `573489`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
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
  },
  {
    id: `5593482`,
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody.jpg`,
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
  },
  {
    id: `123094`,
    title: `Aviator`,
    poster: `aviator.jpg`,
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
  }
];

const comments = [
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
];

const api = createAPI(() => {});

const testInitialState = {
  films,
  promo: films[0],
  comments,
  isLoaded: true,
};

describe(`Data reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      films: [],
      promo: {},
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
      payload: [{fake: true}],
    })).toEqual(extend(testInitialState, {
      films: [{fake: true}],
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
      payload: {fake: true},
    })).toEqual(extend(testInitialState, {
      promo: {fake: true},
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
      payload: [{fake: true}],
    })).toEqual(extend(testInitialState, {
      comments: [{fake: true}],
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_COMMENTS,
      payload: films,
    })).toEqual(extend(testInitialState, {
      comments: films,
    }));
  });

  it(`Reducer should change film favorite`, () => {
    expect(data(testInitialState, {
      type: AppActionTypes.SET_FILM_IS_FAVORITE,
      payload: {
        fake: true,
        id: `573489`
      },
    })).toEqual(extend(testInitialState, {
      promo: {
        fake: true,
        id: `573489`
      },
      films: [].concat({fake: true, id: `573489`}, films.slice(1)),
    }));

    expect(data(testInitialState, {
      type: AppActionTypes.SET_FILM_IS_FAVORITE,
      payload: {
        fake: true,
        id: `5593482`
      },
    })).toEqual(extend(testInitialState, {
      films: [].concat(films[0], {fake: true, id: `5593482`}, films.slice(2)),
    }));
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for set loaded status returns correct action`, () => {
    expect(setLoadedStatus(true)).toEqual({
      type: AppActionTypes.SET_LOADED_STATUS,
      payload: true,
    });
  });

  it(`Action creator for set films returns correct action`, () => {
    expect(setFilms([{fake: true}])).toEqual({
      type: AppActionTypes.SET_FILMS,
      payload: [{fake: true}],
    });
  });

  it(`Action creator for set comments returns correct action`, () => {
    expect(setComments([{fake: true}])).toEqual({
      type: AppActionTypes.SET_COMMENTS,
      payload: [{fake: true}],
    });
  });

  it(`Action creator for set promo returns correct action`, () => {
    expect(setPromo({fake: true})).toEqual({
      type: AppActionTypes.SET_PROMO,
      payload: {fake: true},
    });
  });

  it(`Action creator for set film is favorite returns correct action`, () => {
    expect(setFilmIsFavorite({fake: true})).toEqual({
      type: AppActionTypes.SET_FILM_IS_FAVORITE,
      payload: {fake: true},
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
      .reply(200, [{fake: true}])
      .onGet(ServerRoutes.PROMO)
      .reply(200, {fake: true});

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AppActionTypes.SET_PROMO,
          payload: parseFilm({fake: true}),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AppActionTypes.SET_FILMS,
          payload: parseFilms([{fake: true}]),
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

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AppActionTypes.SET_COMMENTS,
          payload: [],
        });
      });
  });
});
