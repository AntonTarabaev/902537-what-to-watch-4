import {user} from "@components/sign-in/reducer/user";
import {AuthorizationStatus} from "@constants/main";
import {UserActionTypes} from "@constants/action-types";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {setUserData} from "@components/sign-in/actions/set-user-data";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {},
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: UserActionTypes.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(user({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: UserActionTypes.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(user({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: UserActionTypes.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: UserActionTypes.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should change user data by a given value`, () => {
  expect(user({
    userData: {},
  }, {
    type: UserActionTypes.SET_USER_DATA,
    payload: {fake: true},
  })).toEqual({
    userData: {fake: true},
  });

  expect(user({
    userData: {fake: true},
  }, {
    type: UserActionTypes.SET_USER_DATA,
    payload: {name: `foo`, id: `112`},
  })).toEqual({
    userData: {name: `foo`, id: `112`},
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
    expect(setUserData({fake: true})).toEqual({
      type: UserActionTypes.SET_USER_DATA,
      payload: {fake: true},
    });
  });
});
