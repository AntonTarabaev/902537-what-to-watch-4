import {ServerRoutes} from "@constants/routes";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@constants/main";

export const login = (authData) => (dispatch, getState, api) => {
  return api.post(ServerRoutes.LOGIN, {
    email: authData.login,
    password: authData.password,
  })
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    });
};
